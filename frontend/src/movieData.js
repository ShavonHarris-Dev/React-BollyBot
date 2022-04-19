const bollywoodmovies = [
    {
        "title": "RRR",
        "year": 2022,
        "rating": 0.0
    },
    {
        "title": "Gangubai Kathiawadi",
        "year": 2022,
        "rating": 7.0
    },
    {
        "title": "Kalank",
        "year": 2019,
        "rating": 3.5

    },
    {
        "title": 'Gully Boy',
        "year": 2019,
        "rating": 7.9
    },
    {
        "title": 'Raazi',
        "year": 2018,
        "rating": 7.8
    },
    {
        "title": 'Badrinath Ki Dulhania ',
        "year": 2017,
        "rating": 6.1
    },
    {
        "title": 'Dear Zindagi',
        "year": 2016,
        "rating": 7.5
    },
    {
        "title": 'Udta Punjab',
        "year": 2016,
        "rating": 7.8
    },
    {
        "title": 'Kapoor & Sons',
        "year": 2016,
        "rating": 7.7
    },
    {
        "title": 'Shaandaar',
        "year": 2015,
        "rating": 3.6
    },
    {
        "title": 'Humpty Sharma Ki Dulhania',
        "year": 2014,
        "rating": 6
    },
    {
        "title": '2 States',
        "year": 2014,
        "rating": 6.9
    },
    {
        "title": 'Highway',
        "year": 2014,
        "rating": 7.6
    },
    {
        "title": 'Student Of The Year',
        "year": 2012,
        "rating": 5.2
    },
    {
        "title": 'Karate',
        "year": 1983,
        "rating": 6.2
    },
    {
        "title": 'Bekhudi',
        "year": 1992,
        "rating": 4.3
    },
    {
        "title": 'Baazigar',
        "year": 1993,
        "rating": 7.6
    },
    {
        "title": 'Yeh Dillagi',
        "year": 1994,
        "rating": 5.9
    },
    {
        "title": 'Udhaar Ki Zindagi',
        "year": 1994,
        "rating": 5.4
    },
    {
        "title": 'Karan Arjun',
        "year": 1995,
        "rating": 6.8
    },
    {
        "title": 'Taaqat',
        "year": 1995,
        "rating": 4.9
    },
    {
        "title": 'Hulchul',
        "year": 1995,
        "rating": 4.5
    },
    {
        "title": 'Gundaraj',
        "year": 1995,
        "rating": 4.2
    },
    {
        "title": 'Dilwale Dulhania le Jayenge',
        "year": 1995,
        "rating": 8.0
    },
    {
        "title": 'Bambai Ka Babu',
        "year": 1996,
        "rating": 4.1
    },
    {
        "title": 'Minsaara Kanavu',
        "year": 1997,
        "rating": 6.7
    },
    {
        "title": 'Gupt: The Hidden Truth',
        "year": 1997,
        "rating": 7.3
    },
    {
        "title": 'Hameshaa',
        "year": 1997,
        "rating": 5.0
    },
    {
        "title": 'Ishq',
        "year": 1997,
        "rating": 6.8
    },
    {
        "title": 'Pyaar Kiya To Darna Kya',
        "year": 1998,
        "rating": 6.6
    },
    {
        "title": 'Duplicate',
        "year": 1998,
        "rating": 5.5
    },
    {
        "title": 'Dushman',
        "year": 1998,
        "rating": 6.8
    },
    {
        "title": 'Pyaar to Hona Hi Tha',
        "year": 1998,
        "rating": 6.6
    },
    {
        "title": 'Kuch Kuch Hota Hai',
        "year": 1998,
        "rating": 7.6
    },
    {
        "title": 'Hum Aapke Dil Mein Rehte Hain ',
        "year": 1999,
        "rating": 5.5
    },
    {
        "title": 'Hote Hote Pyar Hogaya ',
        "year": 1999,
        "rating": 4.5
    },
    {
        "title": 'Dil Kya Kare  ',
        "year": 1999,
        "rating": 5.1
    },
    {
        "title": 'Raju Chahcha ',
        "year": 2000,
        "rating": 5.1
    },
    {
        "title": 'Kuch Khatti Kuch Meethi ',
        "year": 2001,
        "rating": 4.7
    },
    {
        "title": ' Kabhi Khushi Kabhie Gham',
        "year": 2001,
        "rating": 7.4
    },
    {
        "title": 'Kal Ho Naa Ho ',
        "year": 2003,
        "rating": 7.9
    },
    {
        "title": 'Fanaa ',
        "year": 2006,
        "rating": 7.2
    },
    {
        "title": 'Kabhi Alvida naa Kehna ',
        "year": 2006,
        "rating": 6.0
    },
    {
        "title": 'U Me Aur Hum ',
        "year": 2008,
        "rating": 5.9
    },
    {
        "title": 'Haal-e-Dil ',
        "year": 2008,
        "rating": 3.5
    },
    {
        "title": 'Rab Ne Bana Di Jodi ',
        "year": 2008,
        "rating": 7.2
    },
    {
        "title": 'My Name Is Khan ',
        "year": 2010,
        "rating": 7.9
    },
    {
        "title": 'We Are Family ',
        "year": 2010,
        "rating": 5.6
    },
    {
        "title": 'Toonpur Ka Superrhero',
        "year": 2010,
        "rating": 4.2
    },
    {
        "title": 'Dilwale ',
        "year": 2015,
        "rating": 5.1
    },
    {
        "title": 'Valaiyilla Pattathari 2 ',
        "year": 2017,
        "rating": 5.4
    },
    {
        "title": 'Helicopter Eela ',
        "year": 2018,
        "rating": 5.4
    },
    {
        "title": 'Zero ',
        "year": 2018,
        "rating": 5.4
    },
    {
        "title": 'Tanhaji: The Unsung Warrior ',
        "year": 2020,
        "rating": 7.6
    },
    {
        "title": 'Sasi Lalitha ',
        "year": 2020,
        "rating": 0.0
    },
    {
        "title": 'Koochie Koochie Hota hai ',
        "year": 2021,
        "rating": 6.8
    },
    {
        "title": 'Tribhanga ',
        "year": 2021,
        "rating": 6.2
    },
    
]

export default bollywoodmovies