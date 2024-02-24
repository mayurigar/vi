const purchaseReportmodel = require('../model/purchaseReportmodel');

exports.getallViewStack = async (req, res) => {
    try {
        const allViewStack = await purchaseReportmodel.find();

         res.status(200).json({ success: true, data: allViewStack });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'An error occurred' });
    }
  };

  