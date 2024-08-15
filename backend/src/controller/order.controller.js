import Order from '../models/order.model.js';

export const createOrder = async (req, res) => {
    try {
      const { name, lastname, email, idPlantilla } = req.body;
        const order = new Order({
            name,
            lastname,
            email,
            idPlantilla,
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastname, email, idPlantilla } = req.body;
      const order = await Order.findByIdAndUpdate(id, {
          name,
          lastname,
          email,
          idPlantilla,
      });
      res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findByIdAndDelete(id);
      res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}