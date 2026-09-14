/* =====================================================
   SK OTOP
   JAVASCRIPT
===================================================== */


/* =====================================================
   FEATURED PRODUCTS
===================================================== */

const products = [

    {
        id: 1,

        name: "Watthana Silk",

        thai: "ผ้าไหมมัดหมี่วัฒนา",

        category: "Clothing / เครื่องนุ่งห่ม",

        location: "Watthana Nakhon / วัฒนานคร",

        community: "Baan Mai Thai Phatthana Silk Weaving Group in Nong Takhian Bon Subdistrict / กลุ่มทอผ้าไหมบ้านไหมไทยพัฒนา ตำบลหนองตะเคียนบอน 08-4349-3559",

        descriptionEN:
    "The province’s renowned Mudmee silk and exquisite hand-woven fabrics, beautifully crafted with natural dyes, preserving timeless local wisdom and reflecting the unique cultural heritage of Sakaeo.",

descriptionTH:
    "ผ้าไหมมัดหมี่อันเลื่องชื่อและผ้าทอมืออันประณีต ย้อมด้วยสีธรรมชาติจากภูมิปัญญาท้องถิ่น สืบสานเสน่ห์แห่งงานหัตถศิลป์อันทรงคุณค่า พร้อมสะท้อนเอกลักษณ์และมรดกทางวัฒนธรรมอันงดงามของจังหวัดสระแก้ว",

        image: "https://i.postimg.cc/0NCqnfqW/images.jpg",

        map:
            "https://maps.app.goo.gl/noiivyV45V4jwvH7A"

    },

    {
        id: 2,

        name: "Fried-Dried Spiral Bananas",

        thai: "กล้วยเกลียวทอง",

        category: "Food / อาหาร",

        location: "Khlong Hat / คลองหาด",

        community: "Kluay Kliao Thong Group in Benjakhon Subdistrict / กลุ่มกล้วยเกลียวทอง ตำบลเบญจขร 08-4947-1447, 09-8163-0132",

        descriptionEN:
    "Sun-dried Nam Wa bananas, coated in a signature batter and deep-fried until crispy; non-greasy with a sweet, rich flavor. Packaged in a can with a shelf life of up to 3 months.",

descriptionTH:
    "กล้วยน้ำว้าตากแสงอาทิตย์ ชุบแป้งสูตรเฉพาะ ทอดกรอบ ไม่อมน้ำมัน รสหวานมันอร่อย บรรจุกระป๋องเก็บได้นานถึง 3 เดือน",

        image: "https://i.postimg.cc/Gp8pK05P/banana.jpg",

        map:
            "https://maps.app.goo.gl/B4FsJf5pyLeB9sKw5"

    },

    {
        id: 3,

        name: "Herbal Fluffy Dessert",

        thai: "ขนมถ้วยฟูสมุนไพร",

        category: "Dessert / ขนมหวาน",

        location: "Mueang Sakaeo / เมืองสระแก้ว",

        community: "Baan Morakot Herbal fluffy dessert in Sakaeo Subdistrict / บ้านมรกตขนมถ้วยฟูสมุนไพร ตำบลสระแก้ว 08-1945-2085, 08-8185-3650, LineID: por.tha",

        descriptionEN:
    "Natural food coloring is derived from herbs such as sappan wood, pandan leaves, palm fruit, and butterfly pea flower, mixed with rice flour, coconut milk, sugar, floral-infused water, and fermented rice flour starter.",

descriptionTH:
    "ใช้สมุนไพรธรรมชาติแต่งสีแป้ง ได้แก่ ชมพูจากน้ำฝาง ขาวไม่ใส่สี เขียวจากใบเตย เหลืองจากลูกตาล และฟ้าจากดอกอัญชัญ โดยมีส่วนผสมหลักคือ แป้งข้าวเจ้า น้ำกะทิ น้ำตาลทราย น้ำลอยดอกไม้ และแป้งเชื้อข้าวหมาก",

        image: "https://i.postimg.cc/Xqwnd0xD/fluffy.jpg",
      
        map:
            "https://maps.app.goo.gl/AqMTA1w2z65QwvMq8"

    },

    {
        id: 4,

        name: "Gazing Buddha Art",

        thai: "ศิลปะพระมองตาม",

        category: "Household / ของใช้ ของตกแต่ง",

        location: "Aranyaprathet / อำเภออรัญประเทศ",

        community: "Aranyaprathet Subdistrict / ตำบลอรัญประเทศ 08-1649-7131, 09-3879-4264, LineID:@mongtaam",

       descriptionEN:
    "This 3D sandstone Buddha artwork, designed with a special technique, causes the face to turn and look at the viewer whether they walk to the left or right. It is a prominent 5-star OTOP product of Sa Kaeo province.",

descriptionTH:
    "เป็นงานศิลปะพระพุทธรูปหินทราย3มิติ ที่ออกแบบด้วยเทคนิคพิเศษทำให้พระพักตร์หันมองตามผู้มองไม่ว่าจะเดินไปทางซ้ายหรือขวา และเป็นผลิตภัณฑ์ OTOP 5 ดาว อันโดดเด่นของจังหวัดสระแก้ว",

        image: "https://i.postimg.cc/gJBfjcRJ/buddha.jpg",

        map:
            "https://maps.app.goo.gl/7VCuCKjrCP15ezTw7"

    }

];


/* =====================================================
   9 DISTRICTS
===================================================== */

const districts = [

    {
        id: "mueang",

        name: "Mueang Sakaeo",

        thai: "อำเภอเมืองสระแก้ว",

        products: [

            {
    name: "Herbal Fluffy Dessert",

    thaiName: "ขนมถ้วยฟูสมุนไพร บ้านมรกต",

              categories: [
        "dessert",
        "herbal"
    ],
              
    subdistrict: "Sakaeo Subdistrict / ตำบลสระแก้ว",

    image: "https://i.postimg.cc/Xqwnd0xD/fluffy.jpg",

    descriptionEN:
    "Natural herbs color the batter, with rice flour, coconut milk, sugar, floral water, and fermented rice flour starter as the main ingredients.",

descriptionTH:
    "ใช้สมุนไพรธรรมชาติแต่งสีแป้ง โดยมีแป้งข้าวเจ้า กะทิ น้ำตาล น้ำลอยดอกไม้ และแป้งเชื้อข้าวหมากเป็นส่วนผสมหลัก",

    location:
        "08-1945-2085, 08-8185-3650, LineID: por.tha",

    map:
        "https://maps.app.goo.gl/AqMTA1w2z65QwvMq8"
},

             {
                name: "Mushroom Fermented Sausage",
               
               thaiName: "แหนมเห็ดลุงจวบ",

               categories: [
    "food"
],
              
     subdistrict: "Nong Bon Subdistrict / ตำบลหนองบอน",

                 image: "https://i.postimg.cc/Z5js0Ph5/mushroomnahme.jpg",
               
                descriptionEN:
    "Uncle Juab’s (Lung Juab) Mushroom Naem uses three mushrooms and brown rice, with no preservatives. It lasts 10–15 days and has an authentic taste",

descriptionTH:
    "แหนมเห็ดลุงจวบ ใช้เห็ด3ชนิด หมักข้าวกล้อง ไม่ใส่สารกันเสีย อยู่ได้นาน 10–15 วัน สะอาด อร่อย รสชาติแบบต้นตำรับ.",
               
                location:
               "09-4671-7169, 09-8996-6910, LineID: rinton191",
               
                map:"https://maps.app.goo.gl/EX7xbdejmEw8jAMx5"
},

             {
                name: "Aging Odor Soap",
               
               thaiName: "สบู่กำจัดกลิ่นแก่",

               categories: [
    "beauty",
    "herbal"
],
              
     subdistrict: "Sakaeo Subdistrict / ตำบลสระแก้ว",

                 image: "https://i.postimg.cc/gky5XcFg/careskin.jpg",
               
                descriptionEN:
    "Careskin – Body Care Soap provides deep cleansing while helping manage body odor. Enriched with natural coconut oil, mung bean, and lemon, it leaves skin fresh, clean, and refreshed.",

descriptionTH:
    "Careskin แคร์สกิน – สบู่ดูแลความสะอาดและกลิ่นกาย ช่วยทำความสะอาดผิวอย่างล้ำลึก พร้อมดูแลปัญหากลิ่นกายไม่พึงประสงค์ ด้วยคุณค่าจาก น้ำมันมะพร้าว ถั่วเขียว และเลมอนจากธรรมชาติ ให้ฟองครีมนุ่ม หอมสดชื่น ช่วยลดความมันและแบคทีเรียที่เป็นสาเหตุของกลิ่นกาย ให้ผิวรู้สึกสะอาด สดชื่น และมั่นใจในทุกวัน",
               
                location:
               "08-4198-4489, LineID: @careskin, Shopee: CareSkin Shop Office",
               
                map:"https://www.careskin.co.th/"

               
               },

             {
                name: "Chinese Pastry Bun",
               
               thaiName: "ขนมเปี๊ยะณิชานันท์",

               categories: [
    "dessert"
],
              
     subdistrict: "Tha Yaek Subdistrict / ตำบลท่าแยก",

                 image: "https://i.postimg.cc/XJBt1wGS/piapia.png",
               
                descriptionEN:
    "Nichanan - Khanom Pia (Chinese Pastry Bun) offers delicate homemade Chinese pastries from Sa Kaeo, featuring a soft, fragrant crust and deliciously balanced fillings perfect for enjoying or gifting.",

descriptionTH:
    "ร้านขนมเปี๊ยะณิชานันท์ ขนมเปี๊ยะโฮมเมดจากตำบลท่าแยก อำเภอเมืองสระแก้ว จังหวัดสระแก้ว รังสรรค์ด้วยความพิถีพิถัน ให้แป้งบางนุ่ม หอมละมุน และไส้รสกลมกล่อม เหมาะสำหรับรับประทานและมอบเป็นของฝาก",
               
                location:
               "08-0045-8491, FB: ขนมเปี๊ยะณิชานันท์ ของฝาก จ.สระแก้ว",
               
                map:"https://maps.app.goo.gl/TN95jHKZPWL1E2T27"
                
},
                {
                name: "Turmeric Soap",
               
               thaiName: "สบู่สมุนไพรขมิ้น",

               categories: [
    "beauty",
    "herbal"
],
              
     subdistrict: "Tha Kasem Subdistrict / ตำบลท่าเกษม",

                 image: "https://i.postimg.cc/zf9CmzTC/saboo-kamin.jpg",
               
                descriptionEN:
    "Premium herbal facial soap enriched with Castor Oil, Turmeric Extract, Wan Nang Kham Extract, and Vitamin E. Gently cleanses and cares for the skin, leaving it feeling fresh, smooth, and naturally radiant In addition, there are radish soap and tamarind soap too. showcasing the traditional herbal wisdom and craftsmanship",

descriptionTH:
    "สบู่สมุนไพรเกรดพรีเมียมสำหรับผิวหน้า อุดมด้วยน้ำมันละหุ่ง สารสกัดขมิ้น ว่านนางคำ และวิตามินอี ช่วยทำความสะอาดและดูแลผิวอย่างอ่อนโยน ให้ผิวรู้สึกสะอาด สดชื่น และเรียบเนียน นอกจากนี้ยังมี สบู่หัวไชเท้า และสบู่มะขาม ที่สะท้อนภูมิปัญญาสมุนไพรและความพิถีพิถันในการสร้างสรรค์ผลิตภัณฑ์",
               
                location:
               "09-6559-9198, FB: Thummadee Thailand",
               
                map:"https://www.facebook.com/ThummadeeThailand/"

                  },
                {
                name: "KINNAREE - Curcumin Face Cream",
               
               thaiName: "กินรี เคอร์คูมิน เฟช ครีม",

               categories: [
    "beauty",
    "herbal"
],
              
     subdistrict: "Khok Pi Khong Subdistrict / ตำบลโคกปี่ฆ้อง",

                 image: "https://i.postimg.cc/GpCC2YPL/facecream.jpg",
               
                descriptionEN:
    "KINNAREE Curcumin Face Cream is a nourishing facial moisturizer designed to hydrate the skin, reduce the appearance of fine lines, and promote a brighter, healthier-looking complexion. It is a leave-on skincare product formulated for facial use.",

descriptionTH:
    "ครีมบำรุงผิวหน้า KINNAREE Curcumin Face Cream ช่วยเติมความชุ่มชื้นให้ผิว พร้อมดูแลผิวให้ดูเรียบเนียน ลดเลือนริ้วรอย และช่วยให้ผิวดูกระจ่างใสอย่างเป็นธรรมชาติ เป็นผลิตภัณฑ์แบบไม่ต้องล้างออกสำหรับใช้บริเวณผิวหน้า",
               
                location:
               "09-0936-3635",
               
                map:"https://www.xn--12ca9cdcza1fboh6b4ca0evmxcuh.com/p/4483/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B5-%E0%B9%80%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%9F%E0%B8%8A-%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1.html"

                   },
                {
                name: "KINNAREE - Curcumin Whip Foam",
               
               thaiName: "กินรี เคอร์คูมิน วิป โฟม",

               categories: [
    "beauty",
    "herbal"
],
              
     subdistrict: "Khok Pi Khong Subdistrict / ตำบลโคกปี่ฆ้อง",

                 image: "https://i.postimg.cc/vZzs4T0C/whipfoam.jpg",
               
                descriptionEN:
    "KINNAREE Curcumin Whip Foam is a gentle cleansing foam for the face and body. It creates a rich, soft lather to effectively cleanse the skin, leaving it feeling fresh, clean, and comfortable after rinsing.",

descriptionTH:
    "KINNAREE Curcumin Whip Foam โฟมทำความสะอาดผิวหน้าและผิวกาย เนื้อโฟมนุ่มละเอียด ช่วยทำความสะอาดผิวอย่างอ่อนโยน พร้อมมอบความรู้สึกสะอาด สดชื่น และสบายผิวหลังล้างออก",
               
                location:
               "09-0936-3635",
               
                map:"https://www.xn--12ca9cdcza1fboh6b4ca0evmxcuh.com/p/4482/%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B5-%E0%B9%80%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B8%A7%E0%B8%B4%E0%B8%9B-%E0%B9%82%E0%B8%9F%E0%B8%A1-kinnaree-curcumin-whip-foam.html"

                  },

             {
                name: "Hexagonal Pillow",
               
               thaiName: "หมอนหกเหลี่ยม",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Tha Kasem Subdistrict / ตำบลท่าเกษม",

                 image: "https://i.postimg.cc/mkYdmd6r/pillow.png",
               
                descriptionEN:
    "Mae Khun Ton Kok – Ban Suk Samran Reed Mat Processing Group is a renowned community enterprise producing and distributing OTOP products made from natural reed. Its signature product is the distinctive hexagonal pillow, along with a variety of beautifully crafted reed products that preserve local wisdom and traditional craftsmanship.",

descriptionTH:
    "แม่คูนต้นกก กลุ่มแปรรูปเสื่อกกบ้านสุขสำราญ เป็นวิสาหกิจชุมชนผู้ผลิตและจำหน่ายผลิตภัณฑ์ OTOP จากเสื่อกกที่มีชื่อเสียงของจังหวัดสระแก้ว โดดเด่นด้วยหมอนหกเหลี่ยมและผลิตภัณฑ์แปรรูปจากกกหลากหลายรูปแบบ ถ่ายทอดภูมิปัญญาท้องถิ่นผ่านงานหัตถกรรมที่ประณีตและมีเอกลักษณ์",
               
                location:
               " 09-0386-3402, 08-9099-3813, 08-1983-7561",
               
                map:"https://maps.app.goo.gl/tSueDvPj2r1RyG7R9"

               
            }

        ]

    },


    {
        id: "khlonghat",

        name: "Khlong Hat",

        thai: "อำเภอคลองหาด",

        products: [

          {
                name: "Fried-Dried Spiral Bananas",
              
              thaiName: "กล้วยเกลียวทอง",

            categories: [
    "food",
    "dessert"
],

    subdistrict: "Benjakhon Subdistrict / ตำบลเบญจขร",

              image: "https://i.postimg.cc/4d8pRDWC/banana.jpg",
              
               descriptionEN:
    "Sun-dried Nam Wa bananas coated in a signature batter and fried until crispy. They are non-greasy, sweet, and rich in flavor, packaged in cans with a shelf life of up to 3 months.",

descriptionTH:
    "กล้วยน้ำว้าตากแสงอาทิตย์ ชุบแป้งสูตรเฉพาะทอดจนกรอบ ไม่อมน้ำมัน รสหวานมัน บรรจุกระป๋อง เก็บได้นานถึง 3 เดือน",
              
                location:
                    "08-4947-1447, 09-8163-0132",
              
                map:"https://maps.app.goo.gl/Vyv1AHZcrfnkuYs29"
            },

            {
                name: "Sweet Rose Apple",
              
              thaiName: "ชมพู่คลองหาด",

categories: [
    "food",
    "agriculture"
],
              
    subdistrict: "Sap Makrut Subdistrict / ตำบลซับมะกรูด",

              image: "https://i.postimg.cc/hjrtYPzs/roseapple.jpg",
              
                descriptionEN:
    "A famous fruit from Khlong Hat, Sa Kaeo, officially registered as a GI product in February 2026.",

descriptionTH:
    "เป็นผลไม้เศรษฐกิจขึ้นชื่อของอำเภอคลองหาด จ.สระแก้ว และขึ้นทะเบียน GI อย่างเป็นทางการเมื่อกุมภาพันธ์ 2569",
              
                location:
                    " 08-4347-6963, 06-2368-7535",
              
                map:"https://maps.app.goo.gl/wrN1z5eg1k4Drpav5"
            },

            {
                name: "Pure Honey",
              
              thaiName: "น้ำผึ้งแท้เจริญฟาร์ม",

              categories: [
    "food",
    "agriculture"
],
              
    subdistrict: "Khlong Kai Thuean Subdistrict / ตำบลคลองไก่เถื่อน",

              image: "https://i.postimg.cc/QMGsNVFd/honey.jpg",
              
                descriptionEN:
    "100% pure longan flower honey, produced from a natural apiary in a pesticide-free longan orchard. It has a rich texture, smooth sweetness, and a distinctive floral aroma.",

descriptionTH:
    "น้ำผึ้งแท้ 100% จากเกสรดอกลำไย ผลิตจากฟาร์มผึ้งธรรมชาติในสวนลำไยปลอดสารพิษ มีรสชาติหวานละมุน เนื้อสัมผัสเข้มข้น และมีกลิ่นหอมเกสรดอกไม้ที่เป็นเอกลักษณ์",
              
                location:
                    "06-5549-9462, FB: น้ำผึ้งแท้เจริญฟาร์ม Longan Honey, Shopee: น้ำผึ้งแท้เจริญฟาร์ม",
              
                map:
                    "https://maps.app.goo.gl/m73qzMDJcbmSzngW9"

               },

             {
                name: "Rose-Pattern Paracord Bag",
               
               thaiName: "กระเป๋าเชือกร่มลายดอกกุหลาบ",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Khlong Hat Subdistrict / ตำบลคลองหาด",

                 image: "https://i.postimg.cc/h4xNntfN/rosepurse(1).png",
               
                descriptionEN:
    "Rose-Pattern Paracord Bag, an OTOP product from Khlong Hat District, Sa Kaeo. Handcrafted with care, it features an elegant rose design, lightweight yet durable, while preserving local wisdom and supporting the community.",

descriptionTH:
    "กระเป๋าเชือกร่มลายดอกกุหลาบ OTOP จากอำเภอคลองหาด จังหวัดสระแก้ว งานแฮนด์เมดที่ถักทออย่างประณีต โดดเด่นด้วยลายดอกกุหลาบสวยหรู น้ำหนักเบา แข็งแรง ใช้งานได้หลากหลาย พร้อมสะท้อนภูมิปัญญาและสร้างรายได้ให้ชุมชนท้องถิ่น",
               
                location:
               "03-7512-152, FB: สพอ.คลองหาด จังหวัดสระแก้ว",
               
                map:"https://maps.app.goo.gl/fzF88Sgg8CA835S16"

               },

             {
                name: "Rose Tea",
               
               thaiName: "ชากุหลาบ",

               categories: [
    "food",
    "agriculture"
],
              
     subdistrict: "Khlong Kai Thuean Subdistrict / ตำบลคลองไก่เถื่อน",

                 image: "https://i.postimg.cc/4dvRV35W/rosetea.jpg",
               
                descriptionEN:
    "A refreshing herbal drink made from organically grown herbs by Tubtim Siam 05 Herbal Processing Community Enterprise. The group is the only IFOAM-certified organic herbal producer in Sa Kaeo, reflecting local wisdom, quality, and community craftsmanship. Simply add hot water and sugar to taste.",

descriptionTH:
    "เครื่องดื่มสมุนไพรจากพืชสมุนไพรที่ปลูกแบบอินทรีย์โดยวิสาหกิจชุมชนกลุ่มแปรรูปสมุนไพรทับทิมสยาม 05 ซึ่งเป็นผู้ผลิตสมุนไพรอินทรีย์เพียงแห่งเดียวในจังหวัดสระแก้วที่ได้รับมาตรฐาน IFOAM สะท้อนภูมิปัญญาและความใส่ใจในคุณภาพของชุมชน เพียงเติมน้ำร้อนและน้ำตาลตามความชอบ",
               
                location:
               "08-9912-0490 , 08-9912-0490",
               
                map:"https://maps.app.goo.gl/uK14qYDpyz7FW2vp6"
            }

        ]

    },


    {
        id: "taphraya",

        name: "Ta Phraya",

        thai: "อำเภอตาพระยา",

        products: [

            {
                name: "Mudmee silk",
              
              thaiName: "ผ้ามัดหมี่",

              categories: [
    "clothing",
    "handicraft"
],
              
    subdistrict: "Thap Sadet Subdistrict / ตำบลทัพเสด็จ",

              image: "https://i.postimg.cc/Xv4ym1NX/mudmee.png",
              
                descriptionEN:
    "Exquisite silk products that beautifully reflect the community’s traditional way of life, cultural heritage, and timeless local wisdom, carefully crafted to preserve the unique identity of the community.",

descriptionTH:
    "ผลิตภัณฑ์ผ้าทออันประณีตที่สะท้อนวิถีชีวิต ภูมิปัญญาท้องถิ่น และมรดกทางวัฒนธรรมอันงดงามของชุมชน ถ่ายทอดเอกลักษณ์อันโดดเด่นผ่านงานหัตถศิลป์ที่สืบทอดจากรุ่นสู่รุ่น",
              
                location:
                    "08-6051-8842",
                map:
                    "https://maps.app.goo.gl/w4Bsg9XFHZPg4oEw9"
            },

            {
                name: "Sour Fermented Fish",
              
              thaiName: "ปลาส้มละลุ",

              categories: [
    "food"
],
              
    subdistrict: "Thap Rat Subdistrict / ตำบลทัพราช",

              image: "https://i.postimg.cc/m2G1633r/Pla-Som.jpg",
              
                descriptionEN:
    "Locally crafted Pla Tapian fish, carefully processed using traditional wisdom and time-honored techniques. A flavorful local delicacy and cherished souvenir from Lalu, one of Sa Kaeo’s renowned cultural and natural attractions.",

descriptionTH:
    "ผลิตภัณฑ์แปรรูปจากปลาตะเพียนท้องถิ่น สืบสานภูมิปัญญาการถนอมอาหาร รสชาติดี และเป็นของฝากขึ้นชื่อเมื่อมาเที่ยวชมความงามของ ละลุ แหล่งท่องเที่ยวชื่อดังของสระแก้ว",
                  
                location:
                    "Number not found / ไม่พบเบอร์, FB: กลุ่มวิสาหกิจชุมชนแปลงใหญ่ปลาตะเพียน ละลุ",
              
                map:
                    "https://maps.app.goo.gl/zWS8BBHhKkqhgoBd6"

               
            }

        ]

    },


    {
        id: "wangnamyen",

        name: "Wang Nam Yen",

        thai: "อำเภอวังน้ำเย็น",

        products: [

            {
                name: "Fermented Fish Powder",
              
              thaiName: "มัจฉาหมักไห (ปลาร้าผง)",

              categories: [
    "food"
],
              
    subdistrict: "Wang Nam Yen Subdistrict / ตำบลวังน้ำเย็น",

              image: "https://i.postimg.cc/ZY7qP2xZ/parra.png",
              
                descriptionEN:
    "Made from natural ingredients and standardized fermentation, then processed into powder easy to store and ready for cooking.",

descriptionTH:
    "เป็นมิติใหม่ของวงการปลาร้า ช่วยให้เก็บรักษาได้ง่ายพกพาสะดวกและนำไปปรุงรสอาหารอีสานหรือเมนูอื่นๆได้ทันที",
              
                location:
                    "09-3264-2374, 09-1037-0441, 09-8431-1508, 08-4870-6596",
              
                map:
                    "https://maps.app.goo.gl/CaWbUdbo4snk6nXY8"
            },

            {
                name: "Coconut milk, Longan Ice-Cream",
              
              thaiName: "ไอศกรีมกะทิสด,ไอศกรีมลำไย",

              categories: [
    "food",
    "dessert"
],
              
    subdistrict: "Wang Nam Yen Subdistrict / ตำบลวังน้ำเย็น",

              image: "https://i.postimg.cc/Znnf3FWv/Tim-Khun-Ya.png",
              
                descriptionEN:
    "“Tim Khun Ya” is a traditional ice cream shop inspired by the founder’s grandmother, offering unique flavors made with local ingredients.",

descriptionTH:
    "ร้าน “ติมคุณย่า” เกิดจากแรงบันดาลใจในการสืบต่ออาชีพขายไอศกรีมโบราณของคุณย่า เริ่มทดลองทำและให้คนรอบข้างชิมจนได้รับความนิยม ก่อนพัฒนารสชาติใหม่ ๆ โดยใช้วัตถุดิบท้องถิ่นเพื่อช่วยเหลือเกษตรกร",
              
                location:
                    "08-4107-6494, FB: เตี๋ยวคุณปู่ติมคุณย่า",
              
                map:
                    "https://maps.app.goo.gl/oqvzvBVCcYM3c7ie8"

              },

            {
                name: "Crispy Pork Rinds",
              
              thaiName: "หมูกระจกกลุ่มบ้านวังยาว",

              categories: [
    "food"
],
              
    subdistrict: "Khlong Hin Pun Subdistrict / ตำบลคลองหินปูน",

              image: "https://i.postimg.cc/4xjbFRmk/capmhoo.jpg",
              
                descriptionEN:
    "Community Enterprise produces traditional crispy pork and pork cracklings, creating sustainable local jobs and income.",

descriptionTH:
    "วิสาหกิจชุมชน ผลิตหมูกระจกและกากหมูสูตรโบราณ สร้างงานและรายได้ให้คนในชุมชนอย่างยั่งยืน",
              
                location:
                    "06-3481-4825, FB: หมูกระจกบ้านวังยาว",
              
                map:
                    "https://maps.app.goo.gl/yabutGYe5GSpzRjK6"

               },

             {
                name: "Woven Bamboo Ceramic",
               
               thaiName: "ไม้ไผ่จักสานหุ้มเซรามิก",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Thung Maha Charoen Subdistrict / ตำบลทุ่งมหาเจริญ",

                 image: "https://i.postimg.cc/G3Ssxbcz/bambooseramic.jpg",
               
                descriptionEN:
    "A unique handicraft combining bamboo weaving and ceramics, crafted with local wisdom and intricate skill. It reflects the creativity and craftsmanship of the community in Thung Maha Charoen, Sa Kaeo.",

descriptionTH:
    "งานหัตถกรรมที่ผสาน เครื่องจักสานไม้ไผ่กับเซรามิค ได้อย่างลงตัว ถ่ายทอดภูมิปัญญาท้องถิ่นผ่านการสานอย่างประณีต เกิดเป็นผลิตภัณฑ์ที่มีเอกลักษณ์ สวยงาม และร่วมสมัย สะท้อนความคิดสร้างสรรค์และฝีมือของชุมชน ตำบลทุ่งมหาเจริญ จังหวัดสระแก้ว",
               
                location:
               "08-5239-8821, 09-3636-0871",
               
                map:"https://maps.app.goo.gl/obKTd64RwSoNGMpn8"

                },

            {
                name: "Wang Yao Village Handwoven Fabric",
              
              thaiName: "ผ้าทอมือบ้านวังยาว",

              categories: [
    "clothing",
    "handicraft"
],
              
    subdistrict: "Khlong Hin Pun Subdistrict / ตำบลคลองหินปูน",

              image: "https://i.postimg.cc/bvrQhg9g/wangyao.jpg",
              
                descriptionEN:
    "Wang Yao Handwoven Fabric features colorful handwoven loincloth crafted into charming drawstring bags, floral keychains, and earrings, blending traditional craftsmanship with creative, playful designs.",

descriptionTH:
    "ผ้าทอมือบ้านวังยาว ถ่ายทอดเสน่ห์ของผ้าขาวม้าทอมือผ่านงานแฮนด์เมดสีสันสดใส นำมารังสรรค์เป็น ถุงผ้าอเนกประสงค์แบบหูรูด ที่จุของได้อย่างสะดวก พร้อมตกแต่งด้วยดอกไม้และพวงกุญแจรูปดอกไม้สุดน่ารัก รวมถึง ต่างหูดอกแก้วจากผ้าขาวม้าหลากสี สะท้อนความคิดสร้างสรรค์และภูมิปัญญาของชุมชนได้อย่างมีเอกลักษณ์",
              
                location:
                    "08-1914-8311, FB: ผ้าทอมือบ้านวังยาว",
              
                map:
                    "https://maps.app.goo.gl/Lik7GkqtTDJfVoTH9"
            }

        ]

    },


    {
        id: "watthanakhon",

        name: "Watthana Nakhon",

        thai: "อำเภอวัฒนานคร",

        products: [

            {
                name: "Watthana Silk",
              
              thaiName: "ผ้าไหมทอมือวัฒนา",

              categories: [
    "clothing",
    "handicraft"
],
              
    subdistrict: "Nong Takhian Bon Subdistrict / ตำบลหนองตะเคียนบอน",

              image: "https://i.postimg.cc/0NCqnfqW/images.jpg",
              
                descriptionEN:
    "The province’s renowned Mudmee silk and exquisite hand-woven fabrics, naturally dyed with local wisdom and reflecting Sakaeo’s unique cultural heritage.",

descriptionTH:
    "ผ้าไหมมัดหมี่อันเลื่องชื่อและผ้าทอมืออันประณีต ย้อมสีธรรมชาติจากภูมิปัญญาท้องถิ่น สะท้อนเอกลักษณ์และมรดกทางวัฒนธรรมของจังหวัดสระแก้ว",
              
                location:
                    "08-4349-3559",
              
                map:
                    "https://maps.app.goo.gl/noiivyV45V4jwvH7A"
            },

            {
                name: "Organic brown rice",
              
              thaiName: "ข้าวกล้องหอมมะลิอินทรีย์",

              categories: [
    "food",
    "agriculture"
],
              
    subdistrict: "Sae-o Subdistrict / ตำบลแซร์ออ",

image: "https://i.postimg.cc/3Ry3tJZC/brownrice.png",
              
                descriptionEN:
    "OTOP organic chemical-free Hom Mali brown rice, crafted using the wisdom of Thai farmers.",

descriptionTH:
    "ข้าวกล้องหอมมะลิอินทรีย์ตราแก้ววัฒนชาติ ผลิตจากภูมิปัญญาชาวนาไทย ปลอดสารเคมี และเป็นสินค้า OTOP เด่นของท้องถิ่น",
              
                location:
                    "08-9250-9475, 08-1650-3149",
              
                map:
                    "https://maps.app.goo.gl/2MHUCEgcLPy9azvt8"

              },

            {
                name: "Khanom Thuai",
              
              thaiName: "บ้านขนมถ้วย ป.โท",

              categories: [
    "food",
    "dessert"
],
              
    subdistrict: "Watthana Nakhon Subdistrict / ตำบลวัฒนานคร",

image: "https://i.postimg.cc/NMtx45YQ/kanomtuay.png",
              
                descriptionEN:
    "A famous shop in Watthana Nakhon District, Sa Kaeo Province, known for its traditional herbal steamed coconut milk cakes, preserves an ancestral recipe.",

descriptionTH:
    "ร้านขนมถ้วยสมุนไพรโบราณชื่อดังในอำเภอวัฒนานคร จังหวัดสระแก้ว ซึ่งสืบทอดสูตรดั้งเดิมจากบรรพบุรุษ",
              
                location:
                    "0-3726-1339, 08-0572-4808 LineID: jaturon_mai7452 FB: ขนมถ้วย ป.โท",
              
                map:
                    "https://maps.app.goo.gl/AtfxMBgMsCKLLxxy7"

               },

            {
                name: "Pork Sausage (Moo Yor)",
              
              thaiName: "หมูยอวัฒนานคร",

              categories: [
    "food"
],
              
    subdistrict: "Watthana Nakhon Subdistrict / ตำบลวัฒนานคร",

image: "https://i.postimg.cc/cL4m2cx1/mooyor.jpg",
              
                descriptionEN:
    "A 5-star OTOP souvenir from Watthana Nakhon, made with pure pork, offering a firm texture, balanced flavor, and a fragrant black pepper aroma.",

descriptionTH:
    "เป็นของฝาก OTOP ระดับ 5 ดาว ของอำเภอวัฒนานคร โดดเด่นด้วยเนื้อหมูล้วน เนื้อแน่นเด้ง รสกลมกล่อม หอมพริกไทยดำ",
              
                location:
                    "03-7261-754, 08-5846-9868, 06-2330-5023",
              
                map:
                    "https://maps.app.goo.gl/v49JsYRCQHRL6Jg97"
               },

             {
                name: "Organic Date Palm",
               
               thaiName: "อินทผลาลัมอินทรีย์",

               categories: [
                 "food",
    "agriculture"
],
              
     subdistrict: "Phak Kha Subdistrict / ตำบลผักขะ",

                 image: "https://i.postimg.cc/1zSCHG9g/datepalm.jpg",
               
                descriptionEN:
    "Organic dates from Thung Ngam Farm, carefully grown to deliver fresh, naturally sweet, high-quality fruit while reflecting the dedication of local farmers in Phak Kha Subdistrict.",

descriptionTH:
    "อินทผลาลัมอินทรีย์ จาก ทุ่งงาม ฟาร์ม ผลผลิตคุณภาพจากธรรมชาติ ใส่ใจทุกขั้นตอนการปลูกและดูแลเพื่อให้ได้อินทผลาลัมสดใหม่ รสชาติหวานอร่อย และสะท้อนความตั้งใจของเกษตรกรท้องถิ่นตำบลผักขะอย่างลงตัว",
               
                location:
               "06-6124-2665, FB: ทุ่งงาม ฟาร์ม",
               
                map:"https://maps.app.goo.gl/m9tMjwZ5cxwSTyAK9"

                },

             {
                name: "Health Promoting Herbs",
               
               thaiName: "สมุนไพรบำรุงสุขภาพ",

               categories: [
    "beauty",
    "herbal"
],
              
     subdistrict: "Tha Kwian Subdistrict / ตำบลท่าเกวียน",

                 image: "https://i.postimg.cc/G2wX2vfy/herbs.jpg",
               
                descriptionEN:
    "Local wisdom from the Ban Thap Pradu Community Enterprise in Tha Kwian, Watthana Nakhon, Sa Kaeo, recognized as a model learning center under the Royal Initiative and an OTOP product within the province’s OTOP Nawatvithi tourism program.",

descriptionTH:
    "ภูมิปัญญาท้องถิ่นจากกลุ่มวิสาหกิจชุมชน อสม. บ้านทับประดู่ ตำบลท่าเกวียน อำเภอวัฒนานคร จังหวัดสระแก้ว ได้รับการยกระดับเป็นศูนย์เรียนรู้โครงการอันเนื่องมาจากพระราชดำริต้นแบบ และเป็นผลิตภัณฑ์ OTOP ภายใต้ชุมชนท่องเที่ยว OTOP นวัตวิถีของจังหวัดสระแก้ว",
               
                location:
               "08-7142-4311, FB: สมุนไพรแปรรูป แก่นแก้วกัลยา",
               
                map:"https://maps.app.goo.gl/eBQHaYoBAwLcT77L9"
            }

        ]

    },


    {
        id: "aranyaprathet",

        name: "Aranyaprathet",

        thai: "อำเภออรัญประเทศ",

        products: [

            {
                name: "Gazing Buddha Art",
              
              thaiName: "ศิลปะพระมองตาม",

              categories: [
    "household",
    "handicraft"
],
              
    subdistrict: "Aranyaprathet Subdistrict / ตำบลอรัญประเทศ",

              image: "https://i.postimg.cc/gJBfjcRJ/buddha.jpg",
              
                descriptionEN:
    "3D sandstone Buddha with a face that follows the viewer, a 5-star OTOP product of Sa Kaeo",

descriptionTH:
    "พระพุทธรูปหินทราย 3 มิติ พระพักตร์หันตามผู้มอง OTOP 5 ดาว จังหวัดสระแก้ว",
              
                location:
                    "08-1649-7131, 09-3879-4264 LineID: @mongtaam",
              
                map:
                    "https://www.google.com/maps/search/?api=1&query=Aranyaprathet+OTOP"
            },

            {
                name: "Pesticide-free Melons",
              
              thaiName: "เมล่อน ปลอดสารพิษ",

              categories: [
                "food",
    "agriculture"
],
              
    subdistrict: "ตำบลฟากห้วย",

              image: "https://i.postimg.cc/50k6tRss/melon.png",
              
                descriptionEN:
    "Malee Melon, an integrated farm, offers high-quality, pesticide-free melons and watermelons.",

descriptionTH:
    "มาลีเมล่อนสวนเกษตรผสมผสาน จำหน่ายเมล่อน แตงโมตอปิโด แตงโมไร้เมล็ด คุณภาพดีปลอดสาร",
              
                location:
                    "08-2525-5464, 09-2671-9779 LineID: maleemelon",
              
                map:
                    "https://maps.app.goo.gl/7VCuCKjrCP15ezTw7"

                },

            {
                name: "Loincloth",
              
              thaiName: "ผ้าขาวม้า",

              categories: [
    "clothing",
    "handicraft"
],
              
    subdistrict: "Khlong Nam Sai Subdistrict / ตำบลคลองน้ำใส",

              image: "https://i.postimg.cc/qq32n3Zf/phakaomha.png",
              
                descriptionEN:
    "Exquisite hand-woven fabrics crafted with traditional looms, community-certified and proudly recognized as a 4-star OTOP product.",

descriptionTH:
    "ผลิตภัณฑ์ผ้าทอมืออันประณีตด้วยกี่กระตุก ผ่านการรับรองมาตรฐานผลิตภัณฑ์ชุมชน และได้รับการยอมรับเป็นสินค้า OTOP ระดับ 4 ดาว",
              
                location:
                    " 06-1820-5765, 08-4599-4498 FB: Sk กลุ่มทอผ้าบ้านคลองน้ำใส",
              
                map:
                    "https://maps.app.goo.gl/i7TU5xAprQee7yH9A"

               },

            {
                name: "Herbal Shampoo",
              
              thaiName: "แชมพูสมุนไพรมะกรูดย่านาง",

              categories: [
    "beauty",
    "herbal"
],
              
    subdistrict: "Ban Dan Subdistrict / ตำบลบ้านด่าน",

              image: "https://i.postimg.cc/qByts4vK/shampoo.png",
              
                descriptionEN:
    "Herbal shampoo with Kaffir lime and Yanang leaf helps reduce hair loss, eliminate dandruff, and naturally care for the scalp.",

descriptionTH:
    "แชมพูสมุนไพรมะกรูดผสมใบย่านางช่วยลดผมขาดหลุดร่วง ขจัดรังแค และปรับสมดุลหนังศีรษะอย่างเป็นธรรมชาติ",
              
                location:
                    "08-9809-0145",
              
                map:
                    "https://maps.app.goo.gl/2MHUCEgcLPy9azvt8"

               },

             {
                name: "Anocha Thai Silk",
               
               thaiName: "อโณชาไหมไทย",

               categories: [
    "clothing",
    "handicraft"
],
              
     subdistrict: "Aranyaprathet Subdistrict / ตำบลอรัญประเทศ",

                 image: "https://i.postimg.cc/pV3m4kgN/anocha.jpg",
               
                descriptionEN:
    "Anocha Thai Silk showcases the beauty of Thai silk from Sa Kaeo through exquisite weaving and tailoring. Blending Thai heritage with contemporary design, it offers elegant colors and styles for both special occasions and everyday wear, reflecting the province’s local wisdom and craftsmanship.",

descriptionTH:
    "อโณชาไหมไทย ถ่ายทอดเสน่ห์ของผ้าไหมไทยจากจังหวัดสระแก้ว ผ่านงานทอและการตัดเย็บอย่างประณีต ผสานเอกลักษณ์ความเป็นไทยเข้ากับดีไซน์ร่วมสมัย มีสีสันและรูปแบบหลากหลาย เหมาะสำหรับสวมใส่ได้ทั้งในโอกาสสำคัญและชีวิตประจำวัน พร้อมสะท้อนคุณค่าภูมิปัญญาท้องถิ่นของชาวสระแก้วอย่างงดงาม",
               
                location:
               "08-3587-1551, FB: อโณชาไหมไทย ",
               
                map:"https://maps.app.goo.gl/x9KvBrgQJDa4eiGy7"

                },

             {
                name: "Stylized Wooden Sign",
               
               thaiName: "ป้ายไม้อักษรประดิษฐ์",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Khlong Nam Sai Subdistrict / ตำบลคลองน้ำใส",

                 image: "https://i.postimg.cc/m2ZnxNMv/wood.png",
               
                descriptionEN:
    "Aranyaprathet Wooden Signs blend natural wood with handcrafted typography, creating unique, contemporary designs that reflect the local craftsmanship and wisdom of Aranyaprathet, Sa Kaeo.",

descriptionTH:
    "ป้ายไม้เมืองอรัญ งานหัตถกรรมที่ผสานเสน่ห์ของไม้ธรรมชาติเข้ากับการออกแบบตัวอักษรอย่างประณีต สร้างสรรค์เป็นป้ายไม้ลวดลายสวยงาม มีเอกลักษณ์และร่วมสมัย สะท้อนฝีมือช่างและภูมิปัญญาท้องถิ่นของอำเภออรัญประเทศ จังหวัดสระแก้วได้อย่างลงตัว",
               
                location:
               "08-0573-8208",
               
                map:"https://maps.app.goo.gl/B7AShahfxZ5ThfdN6"
            }

        ]

    },


    {
        id: "khaochakan",

        name: "Khao Chakan",

        thai: "อำเภอเขาฉกรรจ์",

        products: [

            {
                name: "Handcrafted Woven Textiles",

              thaiName: "สินค้าแปรรูปจากผ้าทอมือ บ้านพรสวรรค์",

              categories: [
    "clothing",
    "handicraft",
    "household"
],
              
    subdistrict: "Khao Chakan Subdistrict / ตำบลเขาฉกรรจ์",

              image: "https://i.postimg.cc/dt2F4rnT/Khaochakan-Frabric.jpg",
              
                descriptionEN:
    "Baan Porn-sawan Woven Fabrics, a local craft from Khao Chakan, featuring hand-woven loincloth and unique textile products.",

descriptionTH:
    "ผ้าทอบ้านพรสวรรค์ ผลิตภัณฑ์ภูมิปัญญาท้องถิ่นจากเขาฉกรรจ์ โดดเด่นด้วยผ้าขาวม้าทอมือและสินค้าแปรรูป",
              
                location:
                    "08-1836-8321, 09-8559-5134, 08-9249-6624, FB: ชุมชนท่องเที่ยวบ้านพรสวรรค์ จังหวัดสระแก้ว",
              
                map:
                    "https://maps.app.goo.gl/cRcJ68fee3RHQhQk8"
            },

            {
                name: "Heritage Weaves",
              
              thaiName: "ผ้าทอบ้านไทรงาม",

              categories: [
    "clothing",
    "handicraft"
],
              
    subdistrict: "Phra Phloeng Subdistrict / ตำบลพระเพลิง",

              image: "https://i.postimg.cc/2SXB8svN/fabric-K2.webp",
              
                descriptionEN:
    "A unique local textile featuring a “tortoise scale pattern fabric” with 3D pattern, blended with cotton, vetiver, and pineapple fibers, and dyed with 100% natural colors.",

descriptionTH:
    "ผ้าทอจากภูมิปัญญาท้องถิ่น โดดเด่นด้วยผ้าลายเกล็ดเต่าที่มีเอกลักษณ์และมิติแบบ3D ผสมผสานเส้นใยฝ้ายกับหญ้าแฝกและใยสับปะรด พร้อมย้อมสีธรรมชาติ 100% สวยงามทันสมัยและเป็นมิตรต่อสิ่งแวดล้อม",
              
                location:
                    "08-6956-6285",
              
                map:
                    "https://maps.app.goo.gl/VeLpd7NGNx3FxHnq8"

               },

             {
                name: "Loincloth Fabric Garland",
               
               thaiName: "ผ้าขาวม้ามาลัยกร",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Khao Chakan Subdistrict / ตำบลเขาฉกรรจ์",

                 image: "https://i.postimg.cc/VNYHzsQj/malaikorn.webp",
               
                descriptionEN:
    "“Malai Korn” Pha Khao Ma is a unique OTOP product from Sa Kaeo, transforming traditional handwoven checkered cloth into contemporary floral garlands for ceremonies and honoring elders.",

descriptionTH:
    "ผ้าขาวม้า “มาลัยกร” จังหวัดสระแก้ว เป็นสินค้า OTOP และ Soft Power ภูมิปัญญาท้องถิ่นที่นำผ้าขาวม้าทอมือมาพับและประดิษฐ์เป็นพวงมาลัยร่วมสมัย สำหรับใช้ไหว้ผู้ใหญ่หรือในงานพิธีสำคัญ",
               
                location:
               "06-1510-8041, 08-1499-4340, Shopee: Sakaeo_Otoptrader",
               
                map:"https://maps.app.goo.gl/WVoBV6nNMcmt8oTdA"

                },

             {
                name: "Salted Egg Curing Powder",
               
               thaiName: "ผงเสกไข่เค็ม",

               categories: [
    "food"
],
              
     subdistrict: "Khao Chakan Subdistrict / ตำบลเขาฉกรรจ์",

                 image: "https://i.postimg.cc/wjfgKGnj/saltedegg.jpg",
               
                descriptionEN:
    "“Salted Egg Curing Powder” makes homemade salted eggs simple and enjoyable. Just mix with water, coat the eggs, and let them cure for the recommended time to create delicious salted eggs with ease.",

descriptionTH:
    "“ผงเสกไข่” ตัวช่วยทำไข่เค็มแบบง่าย ๆ ที่เปลี่ยนเรื่องยุ่งยากให้เป็นเรื่องสนุก เพียงผสมน้ำตามขั้นตอน นำไปพอกไข่และทิ้งไว้ตามระยะเวลาที่กำหนด ก็สามารถรังสรรค์ไข่เค็มรสอร่อยได้ง่าย ๆ พร้อมสัมผัสความสะดวกและเอกลักษณ์ในแบบฉบับของตัวเอง",
               
                location:
               "08-1761-9224, www.otoptoday.com",
               
                map:"https://maps.app.goo.gl/VrYWztVayqixeekB8"
            }

        ]

    },


    {
        id: "khoksung",

        name: "Khok Sung",

        thai: "อำเภอโคกสูง",

        products: [

            {
                name: "Cricket Chili Paste",
              
              thaiName: "น้ำพริกจิ้งหรีด",

              categories: [
    "food"
],
              
    subdistrict: "Nong Waeng Subdistrict / ตำบลหนองแวง",

              image: "https://i.postimg.cc/HsY3TXG7/Nam-Prik-Mea-Dow.jpg",
              
                descriptionEN:
    "Mae Dao - Cricket Chili Paste is a high-protein cricket-based chili paste with a delicious, spicy flavor inspired by traditional Thai chili paste.",

descriptionTH:
    "น้ำพริกจิ้งหรีดแม่ดาว เป็นผลิตภัณฑ์น้ำพริกแปรรูปจากจิ้งหรีด มีจุดเด่นคือโปรตีนสูง และรสชาติแซ่บกลมกล่อมแบบน้ำพริกไทย",
              
                location:
                    "08-9499-4251, 08-7001-9164, FB: น้ำพริกจิ้งหรีดแม่ดาว",
              
                map:
                    "https://maps.app.goo.gl/2MHUCEgcLPy9azvt8"
            },

            {
                name: "Carved Tree Stump",
              
              thaiName: "ตอไม้แกะสลัก",

              categories: [
    "household",
    "handicraft"
],
              
    subdistrict: "Nong Waeng Subdistrict / ตำบลหนองแวง",

              image: "https://i.postimg.cc/nhzskKgf/Fish-Furniture.png",
              
                descriptionEN:
    "The Ban Nong Mek Tree Stump Furniture Group is an OTOP producer in Sa Kaeo Province, transforming natural tree stumps into furniture and decorative items such as tables, benches, and living room sets.",

descriptionTH:
    "กลุ่มเฟอร์นิเจอร์ตอไม้บ้านหนองเม็ก เป็นหนึ่งในกลุ่มผู้ผลิตสินค้าชุมชน OTOP จังหวัดสระแก้ว โดยนำตอไม้ธรรมชาติมาแปรรูปเป็นเฟอร์นิเจอร์และของตกแต่ง เช่น ไม้แกะสลักรูปปลา โต๊ะ ม้านั่ง ชุดรับแขก",
              
                location:
                    "08-9499-4251, 09-8250-4470",
              
                map:
                    "https://maps.app.goo.gl/2MHUCEgcLPy9azvt8"

               },

             {
                name: "Grilled Fish Chili Paste",
               
               thaiName: "น้ำพริกแม่สมัย",

               categories: [
    "food"
],
              
     subdistrict: "Nong Muang Subdistrict / ตำบลหนองม่วง",

                 image: "https://i.postimg.cc/hPysW843/maesamai.jpg",
               
                descriptionEN:
    "A selection of renowned OTOP chili pastes from Sa Kaeo, including grilled fish, pork crackling, shrimp, and giant water bug chili pastes, produced by Mrs. Samai Satheunram in Nong Muang Subdistrict, Khok Sung District.",

descriptionTH:
    "น้ำพริกนรกปลาย่าง, น้ำพริกกากหมู, น้ำพริกปลาย่าง, น้ำพริกกุ้ง และน้ำพริกแมงดาสินค้า OTOP ขึ้นชื่อของจังหวัดสระแก้ว ผลิตโดยนางสมัย สะเทินรัมย์ ตั้งอยู่ที่ตำบลหนองม่วง อำเภอโคกสูง จังหวัดสระแก้ว",
               
                location:
               "08-1364-3602, Shopee: Sakaeo_Otoptrader",
               
                map:"https://maps.app.goo.gl/2MHUCEgcLPy9azvt8"
                },

             {
                name: "Ban Kut Phuea Handwoven Fabric",
               
               thaiName: "ผ้าทอมือบ้านกุดผือ",

               categories: [
    "clothing",
    "handicraft"
],
              
     subdistrict: "Non Mak Mun Subdistrict / ตำบลโนนหมากมุ่น",

                 image: "https://i.postimg.cc/FH0xfMg6/Chat-GPT-Image-12-k-y-2569-16-51-01(1).png",
               
                descriptionEN:
    "Ban Kut Phueu handwoven fabric showcases a unique aesthetic with harmonious colors and elegant simplicity, preserving local heritage for generations.",

descriptionTH:
    "ผ้าทอมือบ้านกุดผือเป็นงานหัตถกรรมที่สะท้อนภูมิปัญญาและวิถีชีวิตของชุมชน ถ่ายทอดความประณีตผ่านการทอด้วยมือ พร้อมลวดลายและสีสันอันเป็นเอกลักษณ์ สวยงาม เรียบงาม และช่วยสืบสานภูมิปัญญาท้องถิ่นจากรุ่นสู่รุ่น",
               
                location:
               "08-7033-9787",
               
                map:"https://maps.app.goo.gl/vaEWjuMQAPSuuikX8"

                },

             {
                name: "Woven basket",
               
               thaiName: "ตระกร้าจักสาน",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Non Mak Mun Subdistrict / ตำบลโนนหมากมุ่น",

                 image: "https://i.postimg.cc/MK7twQGb/basket.jpg",
               
                descriptionEN:
    "An intricately woven synthetic-fiber basket with a sturdy inner steel frame, combining durability with elegant craftsmanship and a refined woven pattern.",

descriptionTH:
    "ตะกร้าจักสานใยสังเคราะห์ลวดลายถักอย่างประณีต แข็งแรงและคงรูปด้วยโครงเหล็กด้านใน ผสานความทนทานเข้ากับความสวยงามของงานจักสานอย่างลงตัว",
               
                location:
               "08-0636-2382",
               
                map:"https://maps.app.goo.gl/C9VrekyaDgHFiWJ86"

                },

             {
                name: "Grass flower broom",
               
               thaiName: "ไม้กวาดดอกหญ้า",

               categories: [
    "household",
    "handicraft"
],
              
     subdistrict: "Non Mak Mun Subdistrict / ตำบลโนนหมากมุ่น",

                 image: "https://i.postimg.cc/sgpp7dWN/broom.jpg",
               
                descriptionEN:
    "Traditional grass brooms crafted by a community enterprise in Non Mak Mun Subdistrict. Originally developed through occupational training for people with disabilities and their caregivers after a local flood, the group has grown into a strong community enterprise, creating meaningful work and additional income through traditional craftsmanship.",

descriptionTH:
    "ไม้กวาดดอกหญ้าจากวิสาหกิจชุมชนตำบลโนนหมากมุ่น เกิดจากการส่งเสริมอาชีพแก่คนพิการและผู้ดูแลคนพิการภายหลังเกิดอุทกภัยในพื้นที่ ก่อนพัฒนาสู่การรวมกลุ่มของคนในชุมชนและจดทะเบียนเป็นวิสาหกิจชุมชนในปี พ.ศ. 2559 สร้างอาชีพ รายได้ และความเข้มแข็งให้แก่ชุมชนอย่างต่อเนื่อง",
               
                location:
               "08-0636-2382",
               
                map:"https://maps.app.goo.gl/C9VrekyaDgHFiWJ86"
            }

        ]

    },


    {
        id: "wangsomboon",

        name: "Wang Sombun",

        thai: "อำเภอวังสมบูรณ์",

        products: [

            {
                name: "Big Flook - Tamarind Juice",

              thaiName: "น้ำมะขาม บิ๊กฟลุ๊ก",

              categories: [
    "food",
    "herbal"
],
              
    subdistrict: "Wang Thong Subdistrict / ตำบลวังทอง",

              image: "https://i.postimg.cc/HsvhdLSr/Makham-Juice.jpg",
              
                descriptionEN:
    "Big Flook - Tamarind Juice, made from giant sour tamarind, offers a refreshing sweet-and-sour taste with a delightful aroma.",

descriptionTH:
    "น้ำมะขามตรา Big Flook เป็นผลิตภัณฑ์แปรรูปจากมะขามเปรี้ยวยักษ์ รสเปรี้ยวหวานกลมกล่อม หอมมะขาม ดื่มแล้วสดชื่น เป็นสินค้าขึ้นชื่อของอำเภอวังสมบูรณ์",
              
                location:
                    "08-0953-9521, FB: BIG FLOOK",
              
                map:
                    "https://maps.app.goo.gl/CHx4aZ5NWmztywcd6"
              
            },

            {
                name: "Big Flook - Tamarind Syrup",

              thaiName: "ไซรัปมะขาม บิ๊กฟลุ๊ก",

              categories: [
    "food",
    "herbal"
],
              
    subdistrict: "Wang Thong Subdistrict / ตำบลวังทอง",

              image: "https://i.postimg.cc/7ZdWP9yL/Makham-Syrup.jpg",
              
               descriptionEN:
    "Big Flook - Tamarind Syrup delivers a balanced sweet-and-sour flavor with a rich tamarind aroma, perfect for spicy salads, pounded salads, or refreshing soda drinks",

descriptionTH:
    "ไซรัปมะขาม บิ๊กฟลุ๊ก รสเปรี้ยวหวานกลมกล่อม หอมมะขาม ใช้ปรุงยำ ตำ หรือผสมโซดาก็อร่อยสดชื่น ขวดเดียวอร่อยได้หลากหลายเมนู",
              
                location:
                    "08-0953-9521, FB: BIG FLOOK",
              
                map:
                    "https://maps.app.goo.gl/CHx4aZ5NWmztywcd6"

               },

             {
                name: "Golden Nam Dok Mai Mango",
               
               thaiName: "มะม่วงน้ำดอกไม้สีทอง",

               categories: [
                 "food",
    "agriculture"
],
              
     subdistrict: "Wang Mai Subdistrict / ตำบลวังใหม่",

                 image: "https://i.postimg.cc/SsMjZhTD/mango.jpg",
               
                descriptionEN:
    "Sa Kaeo’s Golden Nam Dok Mai mango is a premium-grade Geographical Indication (GI) product, renowned for its delicately sweet taste, gentle aroma, firm yet smooth and fine-textured flesh, and an appetizing golden-yellow color.",

descriptionTH:
    "มะม่วงน้ำดอกไม้สีทองสระแก้ว เป็นสินค้าสิ่งบ่งชี้ทางภูมิศาสตร์ (GI) แท้เกรดพรีเมียมที่มีชื่อเสียงโดดเด่นด้านรสชาติหวานละมุน กลิ่นหอมนวล เนื้อแน่นเนียนละเอียด และมีสีเหลืองทองน่ารับประทาน",
               
                location:
               "09-9424-1591, FB: มะม่วงน้ำดอกไม้สีทองสวน ก.นุกูล",
               
                map:"https://maps.app.goo.gl/YoPj5TMDst2domzR7"

                },

             {
                name: "Mulberry juice",
               
               thaiName: "น้ำมัลเบอรรี่เข้มข้น",

               categories: [
                 "food",
    "agriculture"
],
              
     subdistrict: "Wang Thong Subdistrict / ตำบลวังทอง",

                 image: "https://i.postimg.cc/X7mjzh5H/mulberry.png",
               
                descriptionEN:
    "Mulberries are sweet-and-sour fruits rich in vitamins, minerals, and antioxidants. Ms. Jirapha Phanpheng, turns them into ready-to-drink mulberry juice, adding value to this local fruit.",

descriptionTH:
    "ลูกหม่อน (มัลเบอร์รี่) เป็นผลไม้ที่มีรสหวานอมเปรี้ยว อุดมด้วยวิตามิน แร่ธาตุ และสารต้านอนุมูลอิสระ คุณจิระภา พันธ์เพ็ง หรือป้าจิ จึงนำลูกหม่อนมาแปรรูปเป็น น้ำลูกหม่อนพร้อมดื่ม เพื่อเพิ่มมูลค่าและส่งต่อคุณประโยชน์จากผลไม้ท้องถิ่น",
               
                location:
               "08-4738-5574",
               
                map:"https://maps.app.goo.gl/aUKV6h84nEuzeWmD8"
            }

        ]

    }

];


/* =====================================================
   RENDER FEATURED PRODUCTS
===================================================== */

const featuredContainer =
    document.getElementById("featuredProducts");


function renderFeaturedProducts() {

    featuredContainer.innerHTML = "";

    products.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">
    <img
        src="${product.image}"
        alt="${product.name}"
    >
</div>

            <div class="product-info">

                <p class="eyebrow">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <p class="product-thai">
                    ${product.thai}
                </p>

                <p class="product-location">
                    📍 ${product.location}
                </p>

                <span class="view-detail">
                    View details →
                </span>

            </div>
        `;


        card.addEventListener(
            "click",
            () => openProduct(product)
        );


        featuredContainer.appendChild(card);

    });

}


renderFeaturedProducts();


/* =====================================================
   PRODUCT MODAL
===================================================== */

const modal =
    document.getElementById("productModal");

const closeModal =
    document.getElementById("closeModal");


function openProduct(product) {

    document.getElementById("modalImage").innerHTML = `
    <img
        src="${product.image}"
        alt="${product.name}"
    >
`;

    document.getElementById("modalCategory")
        .textContent = product.category;

    document.getElementById("modalTitle")
        .textContent = product.name;

    document.getElementById("modalThai")
        .textContent = product.thai;

    document.getElementById("modalDescription").innerHTML = `
    <strong>EN: </strong> ${product.descriptionEN}
    <br><br>
    <strong>TH: </strong> ${product.descriptionTH}
`;

    document.getElementById("modalCommunity")
        .textContent = product.community;

    document.getElementById("modalLocation")
        .textContent = product.location;

    document.getElementById("mapButton")
        .href = product.map;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeProduct() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


closeModal.addEventListener(
    "click",
    closeProduct
);


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeProduct();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);


/* =====================================================
   DISTRICTS
===================================================== */

const districtGrid =
    document.getElementById("districtGrid");

const districtResult =
    document.getElementById("districtResult");

const districtTitle =
    document.getElementById("districtTitle");

const districtThaiTitle =
    document.getElementById("districtThaiTitle");

const districtProducts =
    document.getElementById("districtProducts");


function renderDistricts() {

    districtGrid.innerHTML = "";

    districts.forEach(
        (district, index) => {

            const button =
                document.createElement("button");

            button.className =
                "district-btn";


            button.innerHTML = `

                <span class="district-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                    ${district.name}
                </h3>

                <p>
                    ${district.thai}
                </p>

            `;


            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".district-btn")
                        .forEach(
                            btn =>
                                btn.classList.remove("active")
                        );


                    button.classList.add("active");


                    showDistrict(district);

                }
            );


            districtGrid.appendChild(button);

        }
    );

}


renderDistricts();


/* =====================================================
   SHOW DISTRICT
===================================================== */

const backDistrictBtn =
    document.getElementById("backDistrictBtn");

backDistrictBtn.addEventListener("click", function () {

    districtResult.classList.remove("show");

    document.getElementById("districtGrid").scrollIntoView({
    behavior: "smooth",
    block: "center"
 });

});

function showDistrict(district) {

    districtTitle.textContent = district.name;

    districtThaiTitle.textContent = district.thai;

    districtProducts.innerHTML = "";


    /* =================================================
       CATEGORY FILTERS
    ================================================= */

    const categoryFilters =
        document.getElementById("categoryFilters");

    categoryFilters.innerHTML = "";


    /* ปุ่ม All */

    const allButton =
        document.createElement("button");

    allButton.className =
        "category-filter-btn active";

    allButton.innerHTML = `
        <span>All Products</span>
        <small>สินค้าทั้งหมด</small>
    `;

    categoryFilters.appendChild(allButton);


    /* ปุ่มหมวดสินค้า */

    productCategories.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-filter-btn";

        button.innerHTML = `
            <span>${category.en}</span>
            <small>${category.th}</small>
        `;


        button.addEventListener("click", function () {

            categoryFilters
                .querySelectorAll(".category-filter-btn")
                .forEach(btn => {
                    btn.classList.remove("active");
                });

            this.classList.add("active");

            renderDistrictProducts(
                district,
                category.id
            );

        });


        categoryFilters.appendChild(button);

    });


    /* แสดงสินค้าทั้งหมดตอนเปิดอำเภอ */

    allButton.addEventListener("click", function () {

        categoryFilters
            .querySelectorAll(".category-filter-btn")
            .forEach(btn => {
                btn.classList.remove("active");
            });

        this.classList.add("active");

        renderDistrictProducts(
            district,
            "all"
        );

    });


    renderDistrictProducts(
        district,
        "all"
    );


    districtResult.classList.add("show");


    districtResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* =====================================================
   RENDER DISTRICT PRODUCTS BY CATEGORY
===================================================== */

function renderDistrictProducts(
    district,
    selectedCategory
) {

    districtProducts.innerHTML = "";


    const filteredProducts =
        selectedCategory === "all"

            ? district.products

            : district.products.filter(product => {

                return (
                    product.categories &&
                    product.categories.includes(
                        selectedCategory
                    )
                );

            });


    /* ไม่มีสินค้าในหมวด */

    if (filteredProducts.length === 0) {

        districtProducts.innerHTML = `
            <div class="category-empty">
                No products found in this category.
                <br>
                ไม่พบสินค้าในหมวดนี้
            </div>
        `;

        return;

    }


    filteredProducts.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "district-product";


        card.innerHTML = `

            <div class="district-product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="district-product-info">

                <p class="eyebrow">
                    ${product.subdistrict}
                </p>


                <h4>
                    ${product.name}
                </h4>


                <p class="product-thai-name">
                    ${product.thaiName}
                </p>


                <div class="mobile-description">

                    <button
                        class="view-more-btn"
                        type="button"
                    >
                        View details / ดูรายละเอียด
                    </button>


                    <div class="description-full">

                        <p>
                            <strong>EN:</strong>
                            ${product.descriptionEN}
                        </p>

                        <p>
                            <strong>TH:</strong>
                            ${product.descriptionTH}
                        </p>

                    </div>

                </div>


                <div class="full-details">

                    <p>
                        <strong>
                            Number / เบอร์ติดต่อ:
                        </strong>
                        ${product.location}
                    </p>


                    <a
                        href="${product.map}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="map-btn"
                    >
                        🗺 Map / แผนที่
                    </a>


                    <button
                        class="view-less-btn"
                        type="button"
                    >
                        View less / ย่อรายละเอียด
                    </button>

                </div>

            </div>

        `;


        districtProducts.appendChild(card);


        /* ===============================
           IMAGE LIGHTBOX
        ================================ */

        const productImage =
            card.querySelector(
                ".district-product-image img"
            );


        if (productImage) {

            productImage.addEventListener(
                "click",
                function () {

                    openImageLightbox(
                        this.src,
                        this.alt
                    );

                }
            );

        }


        /* ===============================
           VIEW MORE / LESS
        ================================ */

        const viewMoreBtn =
            card.querySelector(
                ".view-more-btn"
            );

        const viewLessBtn =
            card.querySelector(
                ".view-less-btn"
            );


        function updateDescriptionMode() {

            const isPhone =
                window.matchMedia(
                    "(max-width: 600px)"
                ).matches;


            const full =
                card.querySelector(
                    ".description-full"
                );

            const more =
                card.querySelector(
                    ".view-more-btn"
                );

            const details =
                card.querySelector(
                    ".full-details"
                );

            const less =
                card.querySelector(
                    ".view-less-btn"
                );


            if (isPhone) {

                if (
                    card.classList.contains(
                        "expanded"
                    )
                ) {

                    full.style.display =
                        "block";

                    details.style.display =
                        "block";

                    more.style.display =
                        "none";

                    less.style.display =
                        "inline-flex";

                } else {

                    full.style.display =
                        "none";

                    details.style.display =
                        "none";

                    more.style.display =
                        "inline-flex";

                    less.style.display =
                        "none";

                }

            } else {

                full.style.display =
                    "block";

                details.style.display =
                    "block";

                more.style.display =
                    "none";

                less.style.display =
                    "none";

            }

        }


        updateDescriptionMode();


        viewMoreBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                card.classList.add(
                    "expanded"
                );

                updateDescriptionMode();

            }
        );


        viewLessBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                card.classList.remove(
                    "expanded"
                );

                updateDescriptionMode();

            }
        );

    });

}

/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   LOTUS SCROLL ANIMATION
===================================================== */

const hero =
    document.querySelector(".hero");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 120) {

            hero.classList.add("scrolled");

        } else {

            hero.classList.remove("scrolled");

        }

    }
);


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".product-card, .district-btn, .about-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});

/* =====================================================
   GUIDE PAGE
===================================================== */

const guidePage = document.getElementById("guidePage");
const guideLink = document.getElementById("guideLink");
const mobileGuideLink = document.getElementById("mobileGuideLink");
const guideBack = document.getElementById("guideBack");


/* ================= OPEN GUIDE ================= */

function openGuide(event) {

    event.preventDefault();

    if (!guidePage) return;

    guidePage.classList.add("active");

    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

}


/* ================= DESKTOP GUIDE ================= */

if (guideLink) {

    guideLink.addEventListener(
        "click",
        openGuide
    );

}


/* ================= MOBILE GUIDE ================= */

if (mobileGuideLink) {

    mobileGuideLink.addEventListener(
        "click",
        function(event) {

            openGuide(event);

            if (mobileMenu) {

                mobileMenu.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* ================= BACK TO MAIN PAGE ================= */

if (guideBack && guidePage) {

    guideBack.addEventListener(
        "click",
        function() {

            guidePage.classList.remove("active");

            document.body.style.overflow = "";

        }
    );

}


/* ================= FAQ ================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const item =
                this.closest(".faq-item");

            if (item) {

                item.classList.toggle("open");

            }

        }
    );

});


/* ================= LANGUAGE ================= */

const languageButtons =
    document.querySelectorAll(".language-btn");

languageButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const language =
                this.dataset.lang;


            /* ปุ่มภาษา */

            languageButtons.forEach(
                function(btn) {

                    btn.classList.remove("active");

                }
            );

            this.classList.add("active");


            /* เนื้อหา */

            const guideContents =
                document.querySelectorAll(".guide-content");

            guideContents.forEach(
                function(content) {

                    content.classList.remove("active");

                }
            );


            const selectedContent =
                document.querySelector(
                    ".lang-" + language
                );


            if (selectedContent) {

                selectedContent.classList.add("active");

            }

        }
    );

});

/* =====================================================
   DISTRICT IMAGE LIGHTBOX
===================================================== */

const imageLightbox = document.createElement("div");

imageLightbox.className = "image-lightbox";

imageLightbox.innerHTML = `
    <button
        class="image-lightbox-close"
        type="button"
        aria-label="Close image"
    >
        ×
    </button>

    <img
        src=""
        alt=""
    >
`;

document.body.appendChild(imageLightbox);


const lightboxImage =
    imageLightbox.querySelector("img");

const lightboxClose =
    imageLightbox.querySelector(
        ".image-lightbox-close"
    );


function openImageLightbox(src, alt) {

    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    imageLightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeImageLightbox() {

    imageLightbox.classList.remove("active");

    document.body.style.overflow = "";

    setTimeout(() => {
        lightboxImage.src = "";
    }, 300);
}


/* กากบาท */

lightboxClose.addEventListener(
    "click",
    closeImageLightbox
);


/* คลิกพื้นที่ด้านนอกเพื่อปิด */

imageLightbox.addEventListener(
    "click",
    function(event) {

        if (event.target === imageLightbox) {
            closeImageLightbox();
        }

    }
);


/* กด ESC เพื่อปิด */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            imageLightbox.classList.contains("active")
        ) {
            closeImageLightbox();
        }

    }
);

/* =====================================================
   PRODUCT CATEGORIES
===================================================== */

const productCategories = [
    {
        id: "food",
        en: "Food",
        th: "อาหาร"
    },
    {
        id: "dessert",
        en: "Dessert",
        th: "ขนมหวาน"
    },
    {
        id: "clothing",
        en: "Clothing",
        th: "เครื่องนุ่งห่ม"
    },
    {
        id: "handicraft",
        en: "Handicraft",
        th: "งานหัตถกรรม"
    },
    {
        id: "household",
        en: "Household",
        th: "ของใช้และของตกแต่ง"
    },
    {
        id: "herbal",
        en: "Herbal",
        th: "สมุนไพร"
    },
    {
    id: "beauty",
    en: "Beauty & Care",
    th: "ความงามและการดูแล"
    },
    {
        id: "agriculture",
        en: "Agriculture",
        th: "สินค้าเกษตร"
    }
];