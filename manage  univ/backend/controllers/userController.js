const { User } = require("./../models/user.js");

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
         res.status(200).json(user)
        res.status(200).send(user);


    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const readUser = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
        

    } catch (error) {
        // res.status(500).json({ message: error })
        res.status(500).send(error+"raid");

    }
}
const searchUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
const updateUser = async (req, res) => {
    try {
        
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        if (!user)
            return res.status(404).json({ message: `can not find any user with id ${id}` })

        const updateUser = await User.findById(id)
        res.status(200).json(updateUser)
        
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteUser = async (req, res) => {

    try {
        const { id } = req.params
        const removeduser = await User.findByIdAndDelete(id)
        if (!removeduser) {
            return res.status(404).json({ message: `can not find any user with id ${id}` })
        }
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error })

    }
}

module.exports={ readUser, createUser, searchUser, deleteUser, updateUser }