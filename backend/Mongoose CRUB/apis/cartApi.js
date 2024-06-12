//import db schema
const Cart = require('../model/Cart')
//get all carts
const carts_all = async (req, res) => {
    try {
        const carts = await Cart.find()
        console.log('Data sent')
        res.json(carts)
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}
//insert a cart
const insert_cart = async (req, res) => {
    const cart = new Cart({
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name
    })
    try {
        const savedCart = await cart.save()
        console.log('Item inserted')
        res.send(savedCart)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//update cart
const update_cart = async (req, res) => {
    let p_id = req.body.p_id
    const cart = {
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name
    }
    try {
        const updateCart = await Cart.updateOne(
            { p_id }, cart
        )
        if (updateCart.modifiedCount != 0) {
            console.log('Cart Updated', updateCart)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Cart not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


//delete cart
const delete_cart = async (req, res) => {
    let p_id = req.body.p_id
    try {
        const deletedcart = await Cart.deleteOne({ p_id })
        if (deletedcart.deletedCount != 0) {
            console.log('Cart Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Cart Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    carts_all,
    insert_cart,
    update_cart,
    delete_cart
}
