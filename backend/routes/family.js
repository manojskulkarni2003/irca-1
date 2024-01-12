import express from 'express'
const router=express.Router();
import Page1Model from '../model/Page1.js';
import Page2Model from '../model/Page2.js';
import Page3Model from '../model/Page3.js';
import Page4Model from '../model/Page4.js';
import Page5Model from '../model/Page5.js';


router.post('/page1', async (req, res) => {
    try {
      const page1Data = req.body;
      const page1 = new Page1Model(page1Data);
      const savedPage1 = await page1.save();
      res.status(201).json(savedPage1);
      console.log('Data received from client:', savedPage1);

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


  router.post('/page2', async (req, res) => {
    try {
      const page2Data = req.body;
      const page2 = new Page2Model(page2Data);
      const savedPage2 = await page2.save();
      res.status(201).json(savedPage2);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.post('/page3', async (req, res) => {
    try {
      const page3Data = req.body;
      console.log('Received data from client:', page3Data);
      const page3 = new Page3Model(page3Data);
      const savedPage3 = await page3.save();
      res.status(201).json(savedPage3);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

router.post('/page4', async (req, res) => {
    try {
      const page4Data = req.body;
      const page4 = new Page4Model(page4Data);
      const savedPage4 = await page4.save();
      res.status(201).json(savedPage4);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.post('/page5', async (req, res) => {
    try {
      const page5Data = req.body;
      const page5 = new Page5Model(page5Data);
      const savedPage5 = await page5.save();
      res.status(201).json(savedPage5);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

export default router;