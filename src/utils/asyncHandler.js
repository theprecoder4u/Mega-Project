const asyncHandler = (requestHandler) => {
    (reg, res, next) => {
        Promise.resolve(requestHandler(reg, res, next)).catch((err) => next(err))

    }
}


export {asyncHandler}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {

//     } catch (error) {
//         res.status(err.code || 500).json({ 
//             success: false,
//             message: error.message })
//     }
    
// }