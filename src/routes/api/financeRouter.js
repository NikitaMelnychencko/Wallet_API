const express = require('express');

// const {
//   authMiddleware,
//   validationMiddleware,
// } = require("../../middlewares/index");
const { authMiddleware } = require('../../middlewares/index');
const {
  getAllTransaction,
  getTotal,
  getStatisticsCtrl,
  getCategories,
  //   addContactController,
  //   removeContactByIdController,
  //   putContactController,
  //   patchContactController,
} = require('../../controllers/finance');
const { ctrlWrapper } = require('../../helpers/ctrlWrapper');
const { addTransaction } = require('../../controllers/finance/addTransaction');

const { getTransactionValidate } = require('../../middlewares');

const router = express.Router();

router.get(
  '/',
  authMiddleware,
  getTransactionValidate,
  getAllTransaction.getAllTransaction,
);
router.get('/total-finance', authMiddleware, getTotal.getTotal);
router.get('/statistics', authMiddleware, ctrlWrapper(getStatisticsCtrl));
router.get('/categories', getCategories.getCategories);
// router.get("/:id", getContactByIdController);

router.post(
  '/',
  authMiddleware,
  // validateBody(schemaCreateTransaction),
  ctrlWrapper(addTransaction),
);

// router.post(
//   "/",
//   authMiddleware,
//   validationMiddleware(joiSchema),
//   addContactController,
// );

// router.delete("/:id", removeContactByIdController);

// router.put("/:id", validationMiddleware(joiSchema), putContactController);

// router.patch(
//   "/:id/favorite",
//   validationMiddleware(favoriteSchema),
//   patchContactController,
// );

module.exports = router;
