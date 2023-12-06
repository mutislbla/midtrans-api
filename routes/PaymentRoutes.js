import express from "express";
import midtransClient from "midtrans-client";
const router = express.Router();
router.post("/process-transaction", (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-3boDBHD2A6uK-sz-Ygze3p2x",
      clientKey: "SB-Mid-client-ssnS0_oZJy69ebLY",
    });
    const parameter = {
      transaction_details: {
        order_id: req.body.order_id,
        gross_amount: req.body.total,
      },
      customer_details: {
        first_name: req.body.name,
      },
      enabled_payments: ["bri_va", "other_qris"],
    };
    snap.createTransaction(parameter).then((transaction) => {
      const dataPayment = {
        response: JSON.stringify(transaction),
      };
      const token = transaction.token;
      res.status(200).json({ message: "Success", dataPayment, token: token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
