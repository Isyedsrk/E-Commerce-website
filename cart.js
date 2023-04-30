let carts = document.querySelectorAll('.cart')


let products = [{
        name: 'Fortune Sunflower Refined Oil, 1 L Pouch',
        tag: 'sunoil',
        price: 133,
        inCart: 0
    },
    {
        name: 'Dhara Refined - Sunflower Oil, 3x1 L Multipack ',
        tag: 'sunoil1',
        price: 402,
        inCart: 0
    },
    {
        name: 'Emami Healthy & Tasty - Refined Sunflower Oil, 1 L',
        tag: 'sunoil2',
        price: 137,
        inCart: 0
    },
    {
        name: 'Sunpure Refined - Sunflower Oil, 1 L',
        tag: 'sunoil3',
        price: 137,
        inCart: 0
    },
    {
        name: 'Sundrop Superlite Advanced Oil - Sunflower, 3 L',
        tag: 'sunoil4',
        price: 489,
        inCart: 0
    },
    {
        name: 'Gemini Sunflower Oil - With Nutri Fresh Technology, 5 L Jar',
        tag: 'sunoil5',
        price: 689,
        inCart: 0
    },
    {
        name: 'Mr. Gold Refined Oil - Sunflower, 1 L Pouch',
        tag: 'sunoil6',
        price: 139,
        inCart: 0
    },
    {
        name: 'Nutriorg Certified Organic Sunflower Oil, 500 ml Plastic Bottle',
        tag: 'sunoil7',
        price: 229,
        inCart: 0
    },
    {
        name: 'BORGES Borgefrit High-Mufa-Oleic Sunflower Oil, 1 L Bottle',
        tag: 'sunoil8',
        price: 274,
        inCart: 0
    },
    //----------------GINGELLY OIL-------------//
    {
        name: 'Gingelly Oil',
        tag: 'Tilnad',
        price: 190,
        inCart: 0
    },
    {
        name: 'Kpl Shudhi Gingelly Oil',
        tag: 'KPL',
        price: 175,
        inCart: 0
    },
    {
        name: 'BB Royal Organic Sesame Cooking Oil',
        tag: 'Royal Organic',
        price: 398,
        inCart: 0
    },
    {
        name: 'Nature Way Gingelly Oil',
        tag: 'Unrefined',
        price: 197,
        inCart: 0
    },
    {
        name: 'Mr. Gold Gingely Oil',
        tag: 'Gingely Oil',
        price: 296,
        inCart: 0
    },
    {
        name: 'BB Royal Organic Cold Pressed Sesame Oil',
        tag: 'Sesame Oil',
        price: 399,
        inCart: 0
    },
    {
        name: 'Idhayam Oil',
        tag: 'Idhayam Oil',
        price: 195,
        inCart: 0
    },
    {
        name: 'VVV Oil',
        tag: 'VVV Oil',
        price: 262,
        inCart: 0
    },
    {
        name: 'Swarnanjali Sesame Oil',
        tag: 'Sesame Oil',
        price: 427,
        inCart: 0
    },
    //------------------------MUSTARD OIL------------------//
    {
        name: 'Fortune Kachi Ghani Mustard Oil',
        tag: 'Kachi Ghani Mustard Oil',
        price: 165,
        inCart: 0
    },
    {
        name: 'Dhara Oil ',
        tag: 'Mustard (Kachi Ghani)',
        price: 169,
        inCart: 0
    },
    {
        name: 'Patanjali Mustard Oil ',
        tag: 'Patanjali Mustard Oil',
        price: 155,
        inCart: 0
    },
    {
        name: '24 Mantra Organic Cold Pressed Mustard Oil',
        tag: '24Mustard Oil',
        price: 264,
        inCart: 0
    },
    {
        name: 'BB Royal Organic Cold Pressed Kachi Ghani Mustard Cooking Oil',
        tag: 'BB Royal Organic  Oil',
        price: 199,
        inCart: 0
    },
    {
        name: 'Nutty Yogi Organic Cold Pressed - Mustard Oil',
        tag: 'Mustard Oil',
        price: 339,
        inCart: 0
    },
    {
        name: 'Dhampur Green Organic Mustard Oil',
        tag: 'Mustard Oil',
        price: 300,
        inCart: 0
    },
    //---------------------------------------------GHEE-----------------------------------------------------//
    {
        name: 'Amul High Aroma Cow Ghee',
        tag: 'Amul Ghee',
        price: 275,
        inCart: 0
    },
    {
        name: 'Nutriorg A2 Rich Desi Gir Cow Ghee',
        tag: 'Nutriorg Ghee',
        price: 3144,
        inCart: 0
    },
    {
        name: 'Himalayan Natives Cow Ghee',
        tag: 'Himalayan Ghee',
        price: 340,
        inCart: 0
    },
    {
        name: 'Kapiva Ayurveda A2 Desi Ghee',
        tag: 'Kapiva Ghee',
        price: 1200,
        inCart: 0
    },
    {
        name: 'Gowardhan Swarna Pure Cow Ghee',
        tag: 'Gowardhan Ghee',
        price: 127,
        inCart: 0
    },
    {
        name: 'Nutty Yogi Ghee',
        tag: 'Nutty Ghee',
        price: 345,
        inCart: 0
    },
    {
        name: 'Heritage Buffalo Ghee',
        tag: 'Heritage Ghee',
        price: 595,
        inCart: 0
    },
    {
        name: 'Akiva 100% Pure Cow Ghee',
        tag: 'Akiva Ghee',
        price: 795,
        inCart: 0
    },
    {
        name: 'Dalda Vanaspati',
        tag: 'Dalda ',
        price: 55,
        inCart: 0
    },
    //--------------------------------------------OLIVE OIL----------------------------------------------------//
    {
        name: 'Disano Olive Oil',
        tag: 'Disano Olive Oil ',
        price: 699,
        inCart: 0
    },
    {
        name: 'Figaro Olive Oil',
        tag: 'Figaro Olive Oil',
        price: 3099,
        inCart: 0
    },
    {
        name: 'Del Monte Olive Oil',
        tag: 'Del Monte Olive Oil ',
        price: 699,
        inCart: 0
    },
    {
        name: 'Oleev Active - Goodness Of Olive Oil',
        tag: 'Oleev Olive Oil ',
        price: 198,
        inCart: 0
    },
    {
        name: 'Allegro Olive Oil ',
        tag: 'Allegro Olive Oil ',
        price: 699,
        inCart: 0
    },
    {
        name: 'Saffola Extra Virgin Olive Oil',
        tag: 'Saffola Olive Oil ',
        price: 755,
        inCart: 0
    },
    {
        name: 'Fedora Extra Virgin Olive Oil,',
        tag: 'Fedora Olive Oil ',
        price: 526,
        inCart: 0
    },
    {
        name: 'Colavita Olive Oil - Extra Virgin (Cold Production)',
        tag: 'Colavita Olive Oil ',
        price: 1050,
        inCart: 0
    },
    //---------------------------------------------------GROUNDNUT OIL-------------------------------------------------//
    {
        name: 'Chekko Cold Pressed Virgin Groundnut Oil',
        tag: 'Chekko  Groundnut Oil ',
        price: 271,
        inCart: 0
    },
    {
        name: 'BB Royal Organic Groundnut Cooking Oil',
        tag: 'BB Royal Groundnut Oil ',
        price: 339,
        inCart: 0
    },
    {
        name: 'Patanjali Virgin Groundnut Oil',
        tag: 'Patanjali Groundnut Oil ',
        price: 398,
        inCart: 0
    },
    {
        name: 'Nutriorg Certified Organic Groundnut Oil',
        tag: 'Nutriorg Groundnut Oil ',
        price: 230,
        inCart: 0
    },
    {
        name: 'Engine Groundnut Filter Oil',
        tag: 'Engine Groundnut Oil ',
        price: 210,
        inCart: 0
    },
    //--------------------------------------------------------SPICES----------------------------------------------------//

    {
        name: 'Everest Powder - Turmeric',
        tag: 'Turmeric ',
        price: 54,
        inCart: 0
    },

    {
        name: 'Everest Powder - Tikhalal Chilli',
        tag: 'Everest Chilli',
        price: 86,
        inCart: 0
    },

    {
        name: 'Everest Powder - Kashmirilal',
        tag: 'Kashmirilal',
        price: 135,
        inCart: 0
    },

    {
        name: 'Everest Kasuri Methi',
        tag: 'Methi',
        price: 350,
        inCart: 0
    },

    {
        name: 'Everest Powder - Turmeric',
        tag: 'Turmeric ',
        price: 54,
        inCart: 0
    },

    {
        name: 'Everest Powder - Cumin',
        tag: 'Cumin',
        price: 51,
        inCart: 0
    },

    {
        name: 'Everest Powder - Green Coriander',
        tag: 'Green Coriander',
        price: 56,
        inCart: 0
    },

    {
        name: 'Everest Powder - Black Pepper',
        tag: 'Black Pepper ',
        price: 150,
        inCart: 0
    },

    {
        name: 'Everest Powder - Hingraj',
        tag: 'Hingraj',
        price: 160,
        inCart: 0
    },

    {
        name: 'Everest Powder - Jaljira',
        tag: 'Jaljira',
        price: 50,
        inCart: 0
    },

    {
        name: 'Everest Powder - White Pepper',
        tag: 'White Pepper',
        price: 105,
        inCart: 0
    },

    {
        name: 'Everest Masala - Garam',
        tag: 'Masala - Garam',
        price: 148,
        inCart: 0
    },

    {
        name: 'Everest Chhole Masala,',
        tag: 'Chhole Masala',
        price: 63,
        inCart: 0
    },

    {
        name: 'Everest Chaat Masala',
        tag: 'Chaat Masala',
        price: 62,
        inCart: 0
    },

    {
        name: 'Everest Masala - Chicken',
        tag: 'Chicken Masala',
        price: 143,
        inCart: 0
    },

    {
        name: 'Everest Masala - Tandoori',
        tag: 'Tandoori Masala',
        price: 143,
        inCart: 0
    },

    {
        name: 'Everest Pav Bhaji Masala',
        tag: 'Pav Bhaji Masala',
        price: 66,
        inCart: 0
    },

    {
        name: 'Everest Masala - Shahi Paneer',
        tag: 'Paneer Masala',
        price: 42,
        inCart: 0
    },

    {
        name: 'Everest Masala - Kitchen King',
        tag: 'Kitchen King Masala',
        price: 300,
        inCart: 0
    },

    {
        name: 'Everest Masala - Tea',
        tag: 'Tea Masala',
        price: 98,
        inCart: 0
    },

    {
        name: 'Everest Pani Puri Masala',
        tag: 'Pani Puri Masala',
        price: 31,
        inCart: 0
    },

    {
        name: 'Everest Sabji Masala',
        tag: 'Sabji Masala',
        price: 29,
        inCart: 0
    },

    {
        name: 'Everest Masala - Shahi Biryani',
        tag: 'Shahi Biryani Masala',
        price: 70,
        inCart: 0
    },
    //---------------------------------------------------MAKEUP----------------------------------------------------------------------------//
    {
        name: 'SINDOOR',
        tag: 'Sindoor',
        price: 1300,
        inCart: 0
    },

    {
        name: 'KAJAL',
        tag: 'KAJAL',
        price: 150,
        inCart: 0
    },

    {
        name: 'CC CREAM',
        tag: 'CC CREAM',
        price: 220,
        inCart: 0
    },

    {
        name: 'NAIL POLISH REMOVER',
        tag: 'NAIL POLISH REMOVER',
        price: 110,
        inCart: 0
    },

    {
        name: 'BB FAIRNESS CREAM',
        tag: 'BB FAIRNESS CREAM',
        price: 190,
        inCart: 0
    },

    {
        name: 'Bronson Professional Beauty Blender Makeup Sponge-1pc ',
        tag: 'Bronson Professional Beauty Blender Makeup Sponge-1pc ',
        price: 86,
        inCart: 0
    },

    {
        name: 'Blue heaven Matte Effect Compact With Sunscreen - Universal Shade, 16 g',
        tag: 'Blue heaven Matte Effect Compact With Sunscreen - Universal Shade, 16 g',
        price: 70,
        inCart: 0
    },

    {
        name: 'ZUII ORGANIC Flora Duo Eyeshadow Palette, 3.5 g Vibe',
        tag: 'ZUII ORGANIC Flora Duo Eyeshadow Palette, 3.5 g Vibe',
        price: 368,
        inCart: 0
    },

    {
        name: 'LA girl Eyeliner Pencil, 1.3 g Black',
        tag: 'LA girl Eyeliner Pencil, 1.3 g Black',
        price: 68,
        inCart: 0
    },

    //----------------------------------------------------------------SKIN CARE-----------------------------------------------//

    {
        name: 'Himalaya Purifying Neem Face Wash, 300 ml',
        tag: 'Himalaya Purifying Neem Face Wash, 300 ml',
        price: 237,
        inCart: 0
    },

    {
        name: 'BIOTIQUE Bio Papaya - Revitalizing Tan Removal Scrub, 75 g',
        tag: 'BIOTIQUE Bio Papaya - Revitalizing Tan Removal Scrub, 75 g',
        price: 149,
        inCart: 0
    },


    {
        name: 'Vlcc Gold Facial Kit, 60 g',
        tag: 'Vlcc Gold Facial Kit, 60 g',
        price: 504,
        inCart: 0
    },

    {
        name: 'Himalaya Himalaya Nourishing Skin Cream, 200 ml',
        tag: 'Himalaya Himalaya Nourishing Skin Cream, 200 ml',
        price: 165,
        inCart: 0
    },

    {
        name: 'Dabur Gulabari Premium Rose Water - Paraben Free Skin Toner, 250 ml',
        tag: 'Dabur Gulabari Premium Rose Water - Paraben Free Skin Toner, 250 ml',
        price: 52,
        inCart: 0
    },


    {
        name: 'Himalaya Rich Cocoa Butter Body Cream, 200 ml',
        tag: 'Himalaya Rich Cocoa Butter Body Cream, 200 ml',
        price: 202,
        inCart: 0
    },


    {
        name: 'Soulflower Cold Pressed Virgin Coconut Oil For Hair & Skin Moisturisation, 225 ml',
        tag: 'Soulflower Cold Pressed Virgin Coconut Oil For Hair & Skin Moisturisation, 225 ml',
        price: 117,
        inCart: 0
    },

    {
        name: 'Vlcc Cocoa Butter Detan Glow Body Lotion SPF 30 PA+++',
        tag: 'Vlcc Cocoa Butter Detan Glow Body Lotion SPF 30 PA+++',
        price: 359,
        inCart: 0
    },

    {
        name: 'Natures Essence Lacto Tan Clear, 100 g',
        tag: 'Natures Essence Lacto Tan Clear, 100 g',
        price: 148,
        inCart: 0
    },

    {
        name: 'Natures Essence Bridal Glow Facial Kit, 5 pcs',
        tag: 'Natures Essence Bridal Glow Facial Kit, 5 pcs',
        price: 320,
        inCart: 0
    },

    {
        name: 'Dabur Red Indias No.1 Ayurvedic Fluroide Free Paste, 200 g',
        tag: 'Dabur Red Indias No.1 Ayurvedic Fluroide Free Paste, 200 g',
        price: 320,
        inCart: 0
    },

    //-----------------------------------------------------------------------MEN`S GROOMING--------------------------------------------------------------//

    {
        name: 'Gillette Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge, 3 pcs',
        tag: 'Gillette Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge, 3 pcs',
        price: 327,
        inCart: 0
    },

    {
        name: 'Supermax Classic Shaving Foam - Tea Tree Oil Vitamin E Aloe Vera 52, 400 ml',
        tag: 'Supermax Classic Shaving Foam - Tea Tree Oil Vitamin E Aloe Vera 52, 400 ml',
        price: 87,
        inCart: 0
    },

    {
        name: 'Nivea Men Sensitive After Shave Lotion, 100 ml',
        tag: 'Nivea Men Sensitive After Shave Lotion, 100 ml',
        price: 199,
        inCart: 0
    },

    {
        name: 'Nova NHT 1045 Rechargeable Cordless Beard Trimmer for Men - Black, 1 pc',
        tag: 'Nova NHT 1045 Rechargeable Cordless Beard Trimmer for Men - Black, 1 pc',
        price: 348,
        inCart: 0
    },

    {
        name: 'LetsShave Pro 6 Advance Razor Value Kit For Men, 8 pcs (Get Razor Cap + 200 g Shaving Foam Free)',
        tag: 'LetsShave Pro 6 Advance Razor Value Kit For Men, 8 pcs (Get Razor Cap + 200 g Shaving Foam Free)',
        price: 944,
        inCart: 0
    },

    {
        name: 'Gillette Guard - Cartridges, 6 pcs Pouch ',
        tag: 'Gillette Guard - Cartridges, 6 pcs Pouch ',
        price: 49,
        inCart: 0
    },

    {
        name: 'BIOTIQUE After Shave Gel - Bio Grass, 120 ml',
        tag: 'BIOTIQUE After Shave Gel - Bio Grass, 120 ml',
        price: 117,
        inCart: 0
    },

    {
        name: 'LetsShave Imitation Badger Shaving Brush, 1 pc',
        tag: 'LetsShave Imitation Badger Shaving Brush, 1 pc',
        price: 568,
        inCart: 0
    },

    {
        name: 'Liberty Marine After Shave Spray, 100 ml',
        tag: 'Liberty Marine After Shave Spray, 100 ml',
        price: 1440,
        inCart: 0
    },

    //----------------------------------------------------------------DRY FRUITS---------------------------------------------------------//

    {
        name: 'FabBox Cashews - Pepper Flavoured, 120 g',
        tag: 'FabBox Cashews - Pepper Flavoured, 120 g',
        price: 381,
        inCart: 0
    },

    {
        name: 'FabBox Cashews - Green Chilli, 140 g',
        tag: 'FabBox Cashews - Green Chilli, 140 g',
        price: 400,
        inCart: 0
    },

    {
        name: 'FabBox Morning Mixed Berries - Dried, Cranberries & Blackberries, 70 g',
        tag: 'FabBox Morning Mixed Berries - Dried, Cranberries & Blackberries, 70 g',
        price: 140,
        inCart: 0
    },

    {
        name: 'FabBox Morning Mixed Berries - Dried, Cranberries & Blackberries, 70 g',
        tag: 'FabBox Morning Mixed Berries - Dried, Cranberries & Blackberries, 70 g',
        price: 152,
        inCart: 0
    },

    {
        name: 'Chandan Jamun Vati, 180 g',
        tag: 'Chandan Jamun Vati, 180 g',
        price: 88,
        inCart: 0
    },

    {
        name: 'Well Known Golden Diamond/Zahadi Dry Dates, 500 g Pouch',
        tag: 'Well Known Golden Diamond/Zahadi Dry Dates, 500 g Pouch',
        price: 193,
        inCart: 0
    },

    {
        name: 'Soulfit Black Raisin, 400 g',
        tag: 'Soulfit Black Raisin, 400 g',
        price: 339,
        inCart: 0
    },

    {
        name: 'ASB Royal Flavoured Cashews - Creamy Onion, 250 g',
        tag: 'ASB Royal Flavoured Cashews - Creamy Onion, 250 g',
        price: 370,
        inCart: 0
    },

    {
        name: 'ASB RoyalFlavoured Cashews - Chatpat Chaat, 250 g',
        tag: 'ASB RoyalFlavoured Cashews - Chatpat Chaat, 250 g',
        price: 370,
        inCart: 0
    },

    {
        name: 'Urban Platter California Almonds, 1 kg',
        tag: 'Urban Platter California Almonds, 1 kg',
        price: 1045,
        inCart: 0
    },

    {
        name: 'Pro Nature Walnuts, 200 g',
        tag: 'Pro Nature Walnuts, 200 g',
        price: 578,
        inCart: 0
    },

    {
        name: 'bb Royal Dried Fruit - Blackcurrant, 250 g',
        tag: 'bb Royal Dried Fruit - Blackcurrant, 250 g',
        price: 296,
        inCart: 0
    },

    {
        name: 'Organic Origins Mixed Nuts - Mediterranean Rosemary, 145 g',
        tag: 'Organic Origins Mixed Nuts - Mediterranean Rosemary, 145 g',
        price: 270,
        inCart: 0
    },

    //----------------------------------------------------------------------VEGGIES--------------------------------------------------------------//

    {
        name: 'Fresho Onion, 1 kg',
        tag: 'Fresho Onion, 1 kg',
        price: 137,
        inCart: 0
    },

    {
        name: 'Fresho Potato, 1 kg',
        tag: 'Fresho Potato, 1 kg',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Palak, 100 g',
        tag: 'Fresho Palak, 100 g',
        price: 9,
        inCart: 0
    },

    {
        name: 'Fresho Mushrooms - Button, 1 pack (Approx .180g - 200 g)',
        tag: 'Fresho Mushrooms - Button, 1 pack (Approx .180g - 200 g)',
        price: 44,
        inCart: 0
    },


    {
        name: 'Fresho Tomato - Local, Organically Grown, 500 g',
        tag: 'Fresho Tomato - Local, Organically Grown, 500 g',
        price: 32,
        inCart: 0
    },

    {
        name: 'Fresho Sweet Corn, 2 pcs',
        tag: 'Fresho Sweet Corn, 2 pcs',
        price: 33,
        inCart: 0
    },


    {
        name: 'Fresho Methi/Venthaya Keerai, 100 g',
        tag: 'Fresho Methi/Venthaya Keerai, 100 g',
        price: 11,
        inCart: 0
    },

    {
        name: 'Fresho Cucumber - English, 500 g',
        tag: 'Fresho Cucumber - English, 500 g',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Ladies Finger + Beans French Ring + Carrot Local + Capsicum Green (500 g each), Combo 4 Items',
        tag: 'Fresho Ladies Finger + Beans French Ring + Carrot Local + Capsicum Green (500 g each), Combo 4 Items',
        price: 96,
        inCart: 0
    },

    {
        name: 'Fresho Spring Onion, 100 g',
        tag: 'Fresho Spring Onion, 100 g',
        price: 14,
        inCart: 0
    },


    {
        name: 'Fresho Drumstick/Moringa, 250 g',
        tag: 'Fresho Drumstick/Moringa, 250 g',
        price: 49,
        inCart: 0
    },

    {
        name: 'ASB Combo Fresho Palak Without Root 250Gm + Gowardhan Fresh Paneer Classic Block 200Gm, Combo (2 Items)',
        tag: 'ASB Combo Fresho Palak Without Root 250Gm + Gowardhan Fresh Paneer Classic Block 200Gm, Combo (2 Items)',
        price: 94,
        inCart: 0
    },



    {
        name: 'Fresho Bottle Gourd - Organically Grown, 1 pc',
        tag: 'Fresho Bottle Gourd - Organically Grown, 1 pc',
        price: 26,
        inCart: 0
    },

    {
        name: 'Fresho Amla, 250 g',
        tag: 'Fresho Amla, 250 g',
        price: 38,
        inCart: 0
    },



    {
        name: 'Fresho Beans - French, Round, 250 g',
        tag: 'Fresho Beans - French, Round, 250 g',
        price: 23,
        inCart: 0
    },

    {
        name: 'Fresho Baby Potato, 500 g',
        tag: 'Fresho Baby Potato, 500 g',
        price: 22,
        inCart: 0
    },



    {
        name: 'Fresho Pumpkin - Organically Grown, 1 pc',
        tag: 'Fresho Pumpkin - Organically Grown, 1 pc',
        price: 30,
        inCart: 0
    },

    {
        name: 'Fresho Basale Leaf, 250 g',
        tag: 'Fresho Basale Leaf, 250 g',
        price: 12,
        inCart: 0
    },


    {
        name: 'Fresho Colocasia, 250 g',
        tag: 'Fresho Colocasia, 250 g',
        price: 15,
        inCart: 0
    },

    {
        name: 'Fresho Papaya - Raw, 1 kg',
        tag: 'Fresho Papaya - Raw, 1 kg',
        price: 32,
        inCart: 0
    },


    {
        name: 'Fresho Lettuce - Iceberg, 1 pc (Approx. 250g-500g)',
        tag: 'Fresho Lettuce - Iceberg, 1 pc (Approx. 250g-500g)',
        price: 32,
        inCart: 0
    },

    {
        name: 'Fresho Pumpkin - Disco, 1 pc',
        tag: 'Fresho Pumpkin - Disco, 1 pc',
        price: 26,
        inCart: 0
    },


    {
        name: 'Fresho Zucchini - Green, 500 g',
        tag: 'Fresho Zucchini - Green, 500 g',
        price: 30,
        inCart: 0
    },

    //-----------------------------------------------------------------------FRUITS---------------------------------------------------------------------------//

    {
        name: 'Fresho Banganapalli Mango',
        tag: 'Fresho Banganapalli Mango',
        price: 179,
        inCart: 0
    },
    {
        name: 'Fresho Tomato - Local, Organically Grown',
        tag: 'Fresho Tomato - Local, Organically Grown',
        price: 22,
        inCart: 0
    },
    {
        name: 'Fresho Coconut - Medium',
        tag: 'Fresho Coconut - Medium',
        price: 32,
        inCart: 0
    },
    {
        name: 'Fresho Banana - Yelakki',
        tag: 'Fresho Banana - Yelakki',
        price: 55,
        inCart: 0
    },
    {
        name: 'Fresho Tender Coconut - Medium',
        tag: 'Fresho Tender Coconut - Medium',
        price: 32,
        inCart: 0
    },
    {
        name: 'Fresho Pomegranate, 6 pcs (approx. 1.08 - 1.2 kg)',
        tag: 'Fresho Pomegranate, 6 pcs (approx. 1.08 - 1.2 kg)',
        price: 255,
        inCart: 0
    },
    {
        name: 'Fresho Grapes - Sonaka Seedless',
        tag: 'Fresho Grapes - Sonaka Seedless',
        price: 211,
        inCart: 0
    },
    {
        name: 'Fresho Watermelon - Small',
        tag: 'Fresho Watermelon - Small',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fresho Apple - Red Delicious / Washington, Regular',
        tag: 'Fresho Apple - Red Delicious / Washington, Regular',
        price: 358,
        inCart: 0
    },
    {
        name: 'Fresho Apple - Shimla',
        tag: 'Fresho Apple - Shimla',
        price: 119,
        inCart: 0
    },
    {
        name: 'Fresho Papaya - Medium',
        tag: 'Fresho Papaya - Medium',
        price: 46,
        inCart: 0
    },
    {
        name: 'Fresho Sapota, 500 g',
        tag: 'Fresho Sapota, 500 g',
        price: 30,
        inCart: 0
    },
    {
        name: 'Fresho Pear - Green, Imported, 4 pcs',
        tag: 'Fresho Pear - Green, Imported, 4 pcs',
        price: 175,
        inCart: 0
    },
    {
        name: 'Fresho Orange - Imported, 6 pcs',
        tag: 'Fresho Orange - Imported, 6 pcs',
        price: 195,
        inCart: 0
    },
    {
        name: 'Fresho Apple Shimla 4 pcs + Banana Robusta 1 kg + Watermelon Small + Papaya Medium 1 pc, Combo 4 Items',
        tag: 'Fresho Apple Shimla 4 pcs + Banana Robusta 1 kg + Watermelon Small + Papaya Medium 1 pc, Combo 4 Items',
        price: 205,
        inCart: 0
    },
    {
        name: 'Fresho Kiwi - Green, 3 pcs',
        tag: 'Fresho Kiwi - Green, 3 pcs',
        price: 72,
        inCart: 0
    },
    {
        name: 'Fresho Dragon Fruit, 1 pc 220-350g',
        tag: 'Fresho Dragon Fruit, 1 pc 220-350g',
        price: 89,
        inCart: 0
    },
    {
        name: 'Fresho Totapuri Mango, 500 gm',
        tag: 'Fresho Totapuri Mango, 500 gm',
        price: 70,
        inCart: 0
    },
    {
        name: 'Fresho Pineapple, 1 pc 750-800',
        tag: 'Fresho Pineapple, 1 pc 750-800',
        price: 30,
        inCart: 0
    },
    {
        name: 'Fresho Dates - Kimia, with Seed, 1 pc (Approx. 400g - 500g)',
        tag: 'Fresho Dates - Kimia, with Seed, 1 pc (Approx. 400g - 500g)',
        price: 219,
        inCart: 0
    },
    {
        name: 'Fresho Muskmelon - Netted Small, 1 pc 550g-900g',
        tag: 'Fresho Muskmelon - Netted Small, 1 pc 550g-900g',
        price: 38,
        inCart: 0
    },
    {
        name: 'Fresho Coconut - Diced, 150 g',
        tag: 'Fresho Coconut - Diced, 150 g',
        price: 44,
        inCart: 0
    },
    {
        name: 'Fresho Sun Melon, 1 pc 700 g - 1.5 kg',
        tag: 'Fresho Sun Melon, 1 pc 700 g - 1.5 kg',
        price: 43,
        inCart: 0
    },

    //----------------------------------------------------------------------------CUTS & SPROUTS----------------------------------------------------------------------//

    {
        name: 'Fresho Garlic - Peeled, 3x100 g Multipack',
        tag: 'Fresho Garlic - Peeled, 3x100 g Multipack',
        price: 114,
        inCart: 0
    },
    {
        name: 'Tadaa Sweet Corn Kernels - Naturally Steamed, 350 g',
        tag: 'Tadaa Sweet Corn Kernels - Naturally Steamed, 350 g',
        price: 80,
        inCart: 0
    },

    {
        name: 'Fresho Baby Corn - Peeled, 250 g',
        tag: 'Fresho Baby Corn - Peeled, 250 g',
        price: 53,
        inCart: 0
    },
    {
        name: 'Fresho Sprouts - Mixed Gram, 200 g',
        tag: 'Fresho Sprouts - Mixed Gram, 200 g',
        price: 24,
        inCart: 0
    },

    {
        name: 'Fresho Yam - Cut, 250 g',
        tag: 'Fresho Yam - Cut, 250 g',
        price: 24,
        inCart: 0
    },
    {
        name: 'Fresho Pumpkin Green - Cut, 500 g',
        tag: 'Fresho Pumpkin Green - Cut, 500 g',
        price: 16,
        inCart: 0
    },

    {
        name: 'Fresho Dry Copra/Coconut, 1 pc Approx. 100-125 gm',
        tag: 'Fresho Dry Copra/Coconut, 1 pc Approx. 100-125 gm',
        price: 105,
        inCart: 0
    },
    {
        name: 'Supa Corn Sweet Corn - Desi Masala, 150 g',
        tag: 'Supa Corn Sweet Corn - Desi Masala, 150 g',
        price: 59,
        inCart: 0
    },

    {
        name: 'Supa Corn Sweet Corn Kernels - Achari Masti, 150 g',
        tag: 'Supa Corn Sweet Corn Kernels - Achari Masti, 150 g',
        price: 52,
        inCart: 0
    },
    {
        name: 'Fresho Pineapple - Slices, 200 g',
        tag: 'Fresho Pineapple - Slices, 200 g',
        price: 31,
        inCart: 0
    },

    {
        name: 'Fresho Sambar Onion - Peeled, 200 g',
        tag: 'Fresho Sambar Onion - Peeled, 200 g',
        price: 48,
        inCart: 0
    },
    {
        name: 'Fresho Broccoli - Florets, 200 g',
        tag: 'Fresho Broccoli - Florets, 200 g',
        price: 48,
        inCart: 0
    },

    {
        name: 'Fresho Cut Cauliflower, Washed, 300 g',
        tag: 'Fresho Cut Cauliflower, Washed, 300 g',
        price: 21,
        inCart: 0
    },
    {
        name: 'Fresho Sugarcane - Diced, 200 g',
        tag: 'Fresho Sugarcane - Diced, 200 g',
        price: 20,
        inCart: 0
    },

    {
        name: 'resho Coriander Leaves - Chopped, 100 g',
        tag: 'resho Coriander Leaves - Chopped, 100 g',
        price: 17,
        inCart: 0
    },
    {
        name: 'Fresho Pomegranate - Peeled, 200 g',
        tag: 'Fresho Pomegranate - Peeled, 200 g',
        price: 157,
        inCart: 0
    },

    {
        name: 'Fresho Papaya- Diced, 200 g',
        tag: 'Fresho Papaya- Diced, 200 g',
        price: 36,
        inCart: 0
    },
    {
        name: 'Fresho Carrots - Grated, 200 g',
        tag: 'Fresho Carrots - Grated, 200 g',
        price: 14,
        inCart: 0
    },

    {
        name: 'Fresho Muskmelon - Diced, 200 g',
        tag: 'Fresho Muskmelon - Diced, 200 g',
        price: 28,
        inCart: 0
    },
    {
        name: 'Fresho Beetroot - Diced, 200 g',
        tag: 'Fresho Beetroot - Diced, 200 g',
        price: 12,
        inCart: 0
    },

    {
        name: 'Fresho Ladies Finger - Diced, 200 g',
        tag: 'Fresho Ladies Finger - Diced, 200 g',
        price: 38,
        inCart: 0
    },
    {
        name: 'Fresho Banana - Raw, Sliced, 200 g',
        tag: 'Fresho Banana - Raw, Sliced, 200 g',
        price: 27,
        inCart: 0
    },





    //----------------------------------------------ATTA & FLOUR-----------------------------------------------------------------------------//
    {
        name: 'LAILA-WHOLE WEAT ATTA',
        tag: 'LAILA ATTA',
        price: 100,
        inCart: 0
    },

    {
        name: 'ASHIRWAD-WHOLE WEAT ATTA',
        tag: 'ASHIRWAD ATTA',
        price: 100,
        inCart: 0
    },

    {
        name: 'SRI SRI-WHOLE WEAT ATTA',
        tag: 'SRI SRI ATTA',
        price: 60,
        inCart: 0
    },

    {
        name: 'SOOJI-GOLDEN HARVEST',
        tag: 'SOOJI',
        price: 100,
        inCart: 0
    },

    {
        name: 'MAIDA-SHAKTI BHOG',
        tag: 'MAIDA-SHAKTI BHOG',
        price: 90,
        inCart: 0
    },

    {
        name: 'RICE FLOUR ',
        tag: 'RICE FLOUR ',
        price: 80,
        inCart: 0
    },

    {
        name: 'RAJDHANI BESAN',
        tag: 'BESAN',
        price: 50,
        inCart: 0
    },

    {
        name: 'BROKEN WHEAT DALIYA',
        tag: 'DALIYA',
        price: 68,
        inCart: 0
    },

    {
        name: 'PATHIRI PODI ',
        tag: 'PODI',
        price: 53,
        inCart: 0
    },


    //---------------------------------------------------------------PULSES------------------------------------------------------------//

    {
        name: 'MOONG DAL',
        tag: 'MOONG DAL',
        price: 100,
        inCart: 0
    },

    {
        name: 'TOOR DAL',
        tag: 'TOOR DAL',
        price: 100,
        inCart: 0
    },

    {
        name: 'URAD DAL',
        tag: 'URAD DAL',
        price: 80,
        inCart: 0
    },

    {
        name: 'CHANNA KABULI DAL',
        tag: 'CHANNA KABULI DAL',
        price: 80,
        inCart: 0
    },

    {
        name: 'GREEN MOONG SPLIT/CHILKA',
        tag: 'GREEN MOONG SPLIT/CHILKA',
        price: 80,
        inCart: 0
    },

    {
        name: 'BAJRA',
        tag: 'BAJRA',
        price: 90,
        inCart: 0
    },

    {
        name: 'RAGI',
        tag: 'RAGI',
        price: 93,
        inCart: 0
    },

    {
        name: 'RAJMA',
        tag: 'RAJMA',
        price: 90,
        inCart: 0
    },

    {
        name: 'MASOOR',
        tag: 'MASOOR',
        price: 70,
        inCart: 0
    },

    {
        name: 'Safe Harvest Mung Split - Pesticide Free',
        tag: 'Safe Harvest Mung Split - Pesticide Free',
        price: 87,
        inCart: 0
    },

    {
        name: 'Super Saver Kashmiri Rajma',
        tag: 'Super Saver Kashmiri Rajma',
        price: 63,
        inCart: 0
    },

    {
        name: 'ASB Royal Navaratan Dal',
        tag: 'ASB Royal Navaratan Dal',
        price: 109,
        inCart: 0
    },

    //---------------------------------------------BISCUIT & COOKIES-----------------------------------------//

    {
        name: 'Sunfeast Dark Fantasy Biscuits - Cookies - Choco Fills',
        tag: ' Dark Fantasy Biscuits',
        price: 82,
        inCart: 0
    },

    {
        name: 'Britannia Bourbon Chocolate Cream Biscuits',
        tag: 'Britannia Bourbon',
        price: 25,
        inCart: 0
    },

    {
        name: 'Open Secret Choco Almond Nutty Cookies - Box of 2 Cookies',
        tag: 'Choco Almond Nutty Cookies',
        price: 35,
        inCart: 0
    },

    {
        name: 'Cadbury Oreo Dipped Cookie',
        tag: ' Oreo ',
        price: 58,
        inCart: 0
    },

    {
        name: 'Sunfeast Farmlite Digestive High Fibre Biscuits',
        tag: 'Sunfeast',
        price: 138,
        inCart: 0
    },

    {
        name: 'Sunfeast Mom',
        tag: 'Moms Magic ',
        price: 84,
        inCart: 0
    },

    {
        name: 'Dukes Waffy Choco Roll',
        tag: 'Dukes Waffy Choco Roll',
        price: 75,
        inCart: 0
    },

    {
        name: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Oats & Raisins, Soft & Chewy',
        tag: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Oats & Raisins, Soft & Chewy',
        price: 38,
        inCart: 0
    },

    {
        name: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Choco Chips, Soft & Chewy',
        tag: 'RiteBite Max Protein 7 Grain Breakfast Cookie - Choco Chips, Soft & Chewy',
        price: 408,
        inCart: 0
    },

    {
        name: 'Sunfeast Dark Fantasy - Luxuria Choco Fills Biscuits - Cookies',
        tag: 'Sunfeast Dark Fantasy - Luxuria Choco Fills Biscuits - Cookies',
        price: 60,
        inCart: 0
    },

    {
        name: 'PARLE-G',
        tag: 'PARLE-G',
        price: 62,
        inCart: 0
    },

    {
        name: 'Cadbury Oreo Creme Biscuit - Vanilla, Original',
        tag: 'Cadbury Oreo Creme Biscuit - Vanilla, Original',
        price: 28,
        inCart: 0
    },

    {
        name: 'Parle Hide & Seek - Chocolate',
        tag: 'Parle Hide & Seek - Chocolate',
        price: 60,
        inCart: 0
    },

    {
        name: 'Sunfeast Marie Light Biscuits-Rich Taste',
        tag: 'Sunfeast Marie Light Biscuits-Rich Taste',
        price: 20,
        inCart: 0
    },

    {
        name: 'Dukes Biscuits - Salted',
        tag: 'Dukes Biscuits - Salted',
        price: 41,
        inCart: 0
    },


    //------------------------------------------------------------FROZEN SNACKS-------------------------------------//

    {
        name: 'ITC Master Chef Classic Aloo Tikki',
        tag: 'Aloo Tikki',
        price: 68,
        inCart: 0
    },

    {
        name: 'Mothers Recipe Mix - Poha',
        tag: 'Poha',
        price: 55,
        inCart: 0
    },

    {
        name: 'ITC Master Chef Crispy French Fries',
        tag: 'French Fries',
        price: 80,
        inCart: 0
    },

    {
        name: 'MTR Ready To Eat - Dal Makhani',
        tag: 'Dal Makhani',
        price: 93,
        inCart: 0
    },

    {
        name: 'ITC Master Chef Mumbai Vada Pops',
        tag: 'Vada Pops',
        price: 123,
        inCart: 0
    },

    {
        name: 'Mothers Recipe Instant Mix - Upma',
        tag: 'Upma',
        price: 45,
        inCart: 0
    },

    {
        name: 'Top Ramen Noodles - Curry Veg',
        tag: 'Curry Veg',
        price: 60,
        inCart: 0
    },

    {
        name: 'Aashirvaad Instant Mix - Rava Idli',
        tag: 'Rava Idli',
        price: 110,
        inCart: 0
    },

    {
        name: 'Kitchens Of India Ready to Eat - Chicken Chettinad',
        tag: 'Chicken Chettinad',
        price: 175,
        inCart: 0
    },

    {
        name: 'PRISTINE Beginnings - Organic Corn Flakes',
        tag: 'Organic Corn Flakes',
        price: 130,
        inCart: 0
    },

    {
        name: 'MTR Breakfast Mix - Dosa',
        tag: 'Dosa',
        price: 100,
        inCart: 0
    },

    {
        name: 'Sumeru Masala French Fries - Chilli Garlic',
        tag: 'Chilli Garlic',
        price: 125,
        inCart: 0
    },

    {
        name: 'Sumeru Veg Baked Paratha Lasagne',
        tag: 'Sumeru Veg Baked Paratha Lasagne',
        price: 149,
        inCart: 0
    },

    {
        name: 'Gits Ready Mix - Gulabjamun',
        tag: 'Gulabjamun',
        price: 91,
        inCart: 0
    },

    {
        name: 'MTR Breakfast Mix - Rice Idli',
        tag: 'Rice Idli',
        price: 100,
        inCart: 0
    },

    //-------------------------------------------------------------BEVARAG-------------------------------------------------------------//


    //---------------------------------------COFFEE----------------------------------//



    {
        name: 'Bru Instant Coffee',
        tag: 'Bru Instant Coffee',
        price: 254,
        inCart: 0
    },

    {
        name: 'Tata Coffee Grand Filter Coffee',
        tag: 'Tata Coffee Grand Filter Coffee',
        price: 161,
        inCart: 0
    },

    {
        name: 'ID Traditional Filter Coffee Decoction',
        tag: 'ID Traditional Filter Coffee Decoction',
        price: 80,
        inCart: 0
    },

    {
        name: 'Bru Filter Coffee - Green Label',
        tag: 'Bru Filter Coffee - Green Label',
        price: 138,
        inCart: 0
    },

    {
        name: 'Tata Coffee Grand Coffee',
        tag: 'Tata Coffee Grand Coffee',
        price: 88,
        inCart: 0
    },

    {
        name: 'Cothas Coffee',
        tag: 'Cothas Coffee',
        price: 216,
        inCart: 0
    },

    {
        name: 'Levista Premium Coffee',
        tag: 'Levista Premium Coffee',
        price: 170,
        inCart: 0
    },

    {
        name: 'Nescafe Classic Coffee',
        tag: 'Nescafe Classic Coffee',
        price: 255,
        inCart: 0
    },

    {
        name: 'Nescafe Gold Blend Instant Coffee Powder - Rich & Smooth',
        tag: 'Nescafe Gold Blend Instant Coffee Powder - Rich & Smooth',
        price: 855,
        inCart: 0
    },

    {
        name: 'Davidoff Coffee - Fine Aroma',
        tag: 'Davidoff Coffee - Fine Aroma',
        price: 550,
        inCart: 0
    },

    {
        name: 'Davidoff Coffee - Rich Aroma',
        tag: 'Davidoff Coffee - Rich Aroma',
        price: 480,
        inCart: 0
    },

    {
        name: 'Cothas Coffee Coffee - Powder, Extra Strong',
        tag: 'Cothas Coffee Coffee - Powder, Extra Strong',
        price: 185,
        inCart: 0
    },

    {
        name: 'Cothas Coffee Coffee - Powder, Premium Special',
        tag: 'Cothas Coffee Coffee - Powder, Premium Special',
        price: 210,
        inCart: 0
    },

    {
        name: 'Nescafe Sunrise Instant Coffee - Chicory Mixture',
        tag: 'Nescafe Sunrise Instant Coffee - Chicory Mixture',
        price: 59,
        inCart: 0
    },

    {
        name: 'Continental Malgudi Filter Coffee Pouch - 80:20',
        tag: 'Continental Malgudi Filter Coffee Pouch - 80:20',
        price: 95,
        inCart: 0
    },

    {
        name: 'Bayars Coffee - Eighty Degree',
        tag: 'Bayars Coffee - Eighty Degree',
        price: 84,
        inCart: 0
    },

    {
        name: 'Continental Xtra Coffee Pouch',
        tag: 'Continental Xtra Coffee Pouch',
        price: 115,
        inCart: 0
    },

    //-----------------------------------------------------------------TEA-------------------------------------------------------------------------//

    {
        name: 'Red Label Tea - Natural Care',
        tag: 'Red Label Tea',
        price: 254,
        inCart: 0
    },

    {
        name: 'Taj Mahal Tea',
        tag: 'Taj Mahal Tea',
        price: 71,
        inCart: 0
    },

    {
        name: 'Tata Tea Gold Tea',
        tag: 'Tata Tea Gold Tea',
        price: 504,
        inCart: 0
    },

    {
        name: 'Fresho Mushrooms - Button',
        tag: 'Fresho Mushrooms',
        price: 725,
        inCart: 0
    },

    {
        name: 'Wagh Bakri Leaf Tea',
        tag: 'Wagh Bakri Leaf Tea',
        price: 135,
        inCart: 0
    },

    {
        name: 'Tata Tea Kanan Devan Tea - Golden Leaf',
        tag: 'Tata Tea Kanan Devan Tea - Golden Leaf',
        price: 212,
        inCart: 0
    },

    {
        name: 'Society Tea',
        tag: 'Society Tea',
        price: 48,
        inCart: 0
    },

    {
        name: 'Karma Kettle Celebration Series Darjeeling Second Flush Premium Loose Leaf Black Tea',
        tag: 'Karma Kettle Celebration Series Darjeeling Second Flush Premium Loose Leaf Black Tea',
        price: 400,
        inCart: 0
    },

    {
        name: 'Desi Utthana Slim Tea',
        tag: 'Desi Utthana Slim Tea',
        price: 120,
        inCart: 0
    },

    {
        name: 'Karma Kettle Celebration Series Darjeeling First Flush Premium Loose Leaf Black Tea',
        tag: 'Karma Kettle Celebration Series Darjeeling First Flush Premium Loose Leaf Black Tea',
        price: 450,
        inCart: 0
    },

    {
        name: 'Karma Kettle Nolengur & Khejur Chai - Loose Leaf',
        tag: 'Karma Kettle Nolengur & Khejur Chai - Loose Leaf',
        price: 400,
        inCart: 0
    },

    {
        name: 'Tata Tea Real Tulsi Leaves With Green Tea',
        tag: 'Tata Tea Real Tulsi Leaves With Green Tea',
        price: 125,
        inCart: 0
    },

    {
        name: 'Tata Tea Chakra Tea - Gold Dust',
        tag: 'Tata Tea Chakra Tea - Gold Dust',
        price: 239,
        inCart: 0
    },

    {
        name: 'VAHDAM Organic Turmeric Classic Latte Mix Superfood - Golden Milk Powder With Curcumin',
        tag: 'VAHDAM Organic Turmeric Classic Latte Mix Superfood - Golden Milk Powder With Curcumin',
        price: 279,
        inCart: 0
    },

    {
        name: 'VAHDAM Organic Turmeric Ginger Latte Mix Superfood - Golden Milk Powder With Curcumin',
        tag: 'VAHDAM Organic Turmeric Ginger Latte Mix Superfood - Golden Milk Powder With Curcumin',
        price: 319,
        inCart: 0
    },

    {
        name: 'VAHDAM Sweet Himalayan Loose Leaf Green Tea ',
        tag: 'VAHDAM Sweet Himalayan Loose Leaf Green Tea ',
        price: 279,
        inCart: 0
    },


    //------------------------------------------------------------DRINKS--------------------------------------------------------------//

    {
        name: 'Bournvita Pro-Health Chocolate Drink ',
        tag: ' Bournvita Pro-Health Chocolate Drink',
        price: 392,
        inCart: 0
    },

    {
        name: 'Horlicks Health & Nutrition Drink - Classic Malt ',
        tag: 'Horlicks Health & Nutrition Drink - Classic Malt',
        price: 385,
        inCart: 0
    },



    {
        name: ' Pediasure Nutritional Powder - Complete & Balanced, Premium Chocolate',
        tag: 'Pediasure Nutritional Powder - Complete & Balanced, Premium Chocolate',
        price: 975,
        inCart: 0
    },


    {
        name: 'Boost Nutrition Drink - Health, Energy & Sports',
        tag: 'Boost Nutrition Drink - Health, Energy & Sports',
        price: 301,
        inCart: 0
    },


    {
        name: 'Cadbury Powder Mix - Hot Chocolate Drink ',
        tag: 'Cadbury Powder Mix - Hot Chocolate Drink',
        price: 129,
        inCart: 0
    },


    {
        name: ' Ensure Nutritional Powder - Vanilla Flavour',
        tag: 'Ensure Nutritional Powder - Vanilla Flavour',
        price: 565,
        inCart: 0
    },


    {
        name: ' Horlicks Health & Nutrition Drink - Chocolate Flavour',
        tag: 'Horlicks Health & Nutrition Drink - Chocolate Flavour',
        price: 211,
        inCart: 0
    },



    {
        name: 'MTR Drink Mix - Badam ',
        tag: 'MTR Drink Mix - Badam',
        price: 450,
        inCart: 0
    },



    {
        name: ' Protinex Nutritional Supplement - Original',
        tag: 'Protinex Nutritional Supplement - Original',
        price: 915,
        inCart: 0
    },



    {
        name: 'PureFoods 100% Pure Tender Coconut Water ',
        tag: 'PureFoods 100% Pure Tender Coconut Water',
        price: 75,
        inCart: 0
    },



    {
        name: ' Enfagrow A+ Nutritional Milk Powder Health Drink for Children (3+ years), Vanilla',
        tag: 'Enfagrow A+ Nutritional Milk Powder Health Drink for Children (3+ years), Vanilla',
        price: 70,
        inCart: 0
    },



    {
        name: ' Kapiva Ayurveda Probiotics Gummies With Amla - Improves Gut Health, 10 Pcs',
        tag: 'Kapiva Ayurveda Probiotics Gummies With Amla - Improves Gut Health, 10 Pcs',
        price: 160,
        inCart: 0
    },


    {
        name: 'NUTRIWISH Ashwagandha Powder ',
        tag: 'NUTRIWISH Ashwagandha Powder',
        price: 600,
        inCart: 0
    },


    {
        name: 'Nescafe Sunrise Instant Coffee - Chicory Mixture ',
        tag: 'Nescafe Sunrise Instant Coffee - Chicory Mixture',
        price: 60,
        inCart: 0
    },


    {
        name: 'Pediasure 7+ Specialised Nutrition Drink Powder For Growing Children - Vanilla Flavour ',
        tag: 'Pediasure 7+ Specialised Nutrition Drink Powder For Growing Children - Vanilla Flavour',
        price: 335,
        inCart: 0
    },


    {
        name: 'Amul Pro Whey Protein - Malt Beverage health drink with DHA - Chocolate ',
        tag: 'Amul Pro Whey Protein - Malt Beverage health drink with DHA - Chocolate',
        price: 140,
        inCart: 0
    },

    {
        name: 'Saffola Immuniveda Golden Turmeric Milk Mix - Immunity Booster ',
        tag: 'Saffola Immuniveda Golden Turmeric Milk Mix - Immunity Booster',
        price: 339,
        inCart: 0
    },

    //-----------------------------------------------------------DETERGENTS----------------------------------------------------------------------//

    {
        name: 'Ariel Detergent Washing Powder - Matic Front Load, 2 kg ',
        tag: 'Ariel Detergent Washing Powder - Matic Front Load, 2 kg',
        price: 355,
        inCart: 0
    },

    {
        name: 'Surf Excel Matic Front Load Detergent Powder ',
        tag: 'Surf Excel Matic Front Load Detergent Powder',
        price: 338,
        inCart: 0
    },


    {
        name: 'Tide Ultra Anti-Germ Detergent Washing Powder, 1 kg ',
        tag: 'Tide Ultra Anti-Germ Detergent Washing Powder, 1 kg',
        price: 160,
        inCart: 0
    },


    {
        name: 'Wheel Detergent Powder - Lemon & Orange, 1 Kg ',
        tag: 'Wheel Detergent Powder - Lemon & Orange, 1 Kg',
        price: 153,
        inCart: 0
    },


    {
        name: 'Henko Detergent Powder - Stain Care, 3 kg Get 1 kg free ',
        tag: 'Henko Detergent Powder - Stain Care, 3 kg Get 1 kg free',
        price: 404,
        inCart: 0
    },


    {
        name: ' Rin Machine Expert Detergent Powder, 3 kg',
        tag: 'Rin Machine Expert Detergent Powder, 3 kg',
        price: 325,
        inCart: 0
    },


    {
        name: 'Ariel Matic 3-in-1 PODs Detergent Pack ',
        tag: 'Ariel Matic 3-in-1 PODs Detergent Pack',
        price: 410,
        inCart: 0
    },

    {
        name: 'Surf Excel Liquid Detergent - Matic, Front Load, 1 L ',
        tag: 'Surf Excel Liquid Detergent - Matic, Front Load, 1 L',
        price: 202,
        inCart: 0
    },

    {
        name: 'Ezee Liquid Detergent - Winterwear, Chiffon & Silks, 1 kg ',
        tag: 'Ezee Liquid Detergent - Winterwear, Chiffon & Silks, 1 kg',
        price: 161,
        inCart: 0
    },

    //----------------------------------------------------FRESHNERS & REPELNENTS------------------------------------------------------------------//

    {
        name: 'Good knight Power Activ+ - Mosquito Repellent Refill, 270 ml (Pack of 6)',
        tag: 'Good knight Power Activ+ - Mosquito Repellent Refill, 270 ml (Pack of 6)',
        price: 367,
        inCart: 0
    },

    {
        name: 'Odonil Bathroom Air Freshener Blissful Citrus 10g + Vim Dishwash Gel Lemon 500ml, Combo 2 Items',
        tag: 'Odonil Bathroom Air Freshener Blissful Citrus 10g + Vim Dishwash Gel Lemon 500ml, Combo 2 Items',
        price: 147,
        inCart: 0
    },


    {
        name: 'Home Naphthalene Balls, 100 g Pouch',
        tag: 'Home Naphthalene Balls, 100 g Pouch',
        price: 20,
        inCart: 0
    },


    {
        name: 'HIT Cockroach Killer Spray, 700 ml',
        tag: 'HIT Cockroach Killer Spray, 700 ml',
        price: 227,
        inCart: 0
    },


    {
        name: 'Aer Pocket - Bathroom Air Fragrance, 10 g (Assorted Pack of 3)',
        tag: 'Aer Pocket - Bathroom Air Fragrance, 10 g (Assorted Pack of 3)',
        price: 136,
        inCart: 0
    },


    {
        name: 'Bodyguard Herbal Fabric Roll On With Citronella & Lemongrass Oil, 10 ml (Pack of 3)',
        tag: 'Bodyguard Herbal Fabric Roll On With Citronella & Lemongrass Oil, 10 ml (Pack of 3)',
        price: 198,
        inCart: 0
    },


    {
        name: 'Good knight Naturals Fly Spray, 150 ml',
        tag: 'Good knight Naturals Fly Spray, 150 ml',
        price: 299,
        inCart: 0
    },


    {
        name: 'Bodyguard Natural Mosquito Repellent Cream With Aloe Vera & Neem Extracts, 100 g',
        tag: 'Bodyguard Natural Mosquito Repellent Cream With Aloe Vera & Neem Extracts, 100 g',
        price: 98,
        inCart: 0
    }


];



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
        console.log("added to cart");
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.side-menu span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    console.log("the products is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.side-menu span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.side-menu span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }

        }
        // console.log(cartItems[product.tag]);
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
        console.log("my cartItems are", cartItems);

    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    localStorage.setItem("totalCost", product.price);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="products">
              <img class="imgs" src ="../images/${item.tag}.jpg">
                   <span style="font-size:30px; font-weight:bolder; color:black;">&nbsp;&nbsp;${item.name}</span>

                     </div>
               <div class="price" style="color:black;"><b>Product Price:- </b>&nbsp;&nbsp; Rs ${item.price}.00
                   </div>
                   <div class="total" style="color:black;"> <b>Quantity:- </b> &nbsp;&nbsp;${item.inCart}</div>
                   <div class="total" style="color:black;"> <b>Total Price:- </b> &nbsp;&nbsp;Rs ${item.inCart * item.price}.00</div><br><br>

                `;
        });
    }

    productContainer.innerHTML += `
             <div class="basketTotalContainer">
           
            <h2 class="basketTotalTitle"><b>Basket Total</b></h4>
            <hr>
            <h3 class="basketTotal"> Rs-${cartCost}.00</h4>
            </div>
              `;

}


onLoadCartNumbers();
displayCart();