let allMusic = [
    {
        name: "In my Feelings",
        artist: "Drake",
        img: "https://i.ytimg.com/vi/az6m9IE8h4o/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454951/1.In_My_Feelings_zo1yyj.mp3",
    },

    {
        name: "Radioactive",
        artist: "Imagine Dragons, Kendrick Lamar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdL7lX4SIefoTc1EFSLxEAfr6jEOK4WsstBXT8f5XfYrqd0Hsw1f9d4wNOBby89qjLLro&usqp=CAU",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454871/2.Radioactive_jmf3qf.mp3",
    },

    {
        name: "Whatever It Takes",
        artist: "Imagine Dragons",
        img: "https://i1.sndcdn.com/artworks-000438539049-g9m69f-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454828/3.Whatever_It_Takes_vet59n.mp3",
    },

    {
        name: "Shape Of You",
        artist: "Ed Sheeran",
        img: "data:image/jpeg;base64,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",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456402/4.Shape_of_You_xr2fb9.mp3",
    },

    {
        name: "Perfect",
        artist: "Ed Sheeran",
        img: "https://i.ytimg.com/vi/CWG-GDfejmY/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454890/5.Perfect_lqgt9c.mp3",
    },

    {
        name: "Thunder",
        artist: "Imagine Dragons",
        img: "http://a10.gaanacdn.com/images/albums/46/1990046/crop_480x480_1990046.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454844/6.Thunder_les682.mp3",
    },

    {
        name: "Believer",
        artist: "Imagine Dragons",
        img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454919/7.Believer_cmbian.mp3",
    },

    {
        name: "Yummy",
        artist: "Justin Bieber",
        img: "https://www.gannett-cdn.com/presto/2020/01/03/USAT/1e494286-b203-4a78-8935-9bd5a5db7efd-20200103_17_BIEBER_1.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webp",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454935/8.Yummy_ozdkjk.mp3",
    },

    {
        name: "StarBoy",
        artist: "The Weekend , Daft Punk",
        img: "https://www.rollingstone.com/wp-content/uploads/2018/06/weeknd-starboy-album-review-92e9ca7c-8701-41e0-8720-2102a52cd1dd.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620454995/9.Starboy_xlp3yx.mp3",
    },

    {
        name: "Baby",
        artist: "Justin Bieber",
        img: "https://i.pinimg.com/originals/11/cb/43/11cb43359e4bc44ded6099fdb79b25c9.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455017/10.Baby_gpyj6w.mp3",
    }, 
    
    {
        name: "Mia",
        artist: "Bad Bunny, Drake",
        img: "https://i1.sndcdn.com/artworks-000472246587-dnl9cv-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455036/11.MIA__feat._Drake_v9v5ye.mp3",
    }, 

    {
        name: "I Like It",
        artist: "Cardi B",
        img: "https://i1.sndcdn.com/artworks-000440228403-eep92t-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455090/13.I_Like_It_hchk8w.mp3",
    }, 

    {
        name: "it feels like i'm drowning",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/i_WTHkBuqbg/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455091/14.I_Feel_Like_Im_Drowning_rjyuf0.mp3",
    }, 

    
    {
        name: "Love is Bitch",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/yGl7errjHWk/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455120/15.Love_Is_a_Bitch_pzvhwh.mp3",
    }, 

    {
        name: "Wolves",
        artist: "Slena Gomez",
        img: "https://i.ytimg.com/vi/1L0beNrqGkM/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455172/16.Wolves_fqbdt6.mp3",
    }, 

    {
        name: "How Long",
        artist: "Charlie Puth",
        img: "https://i.ytimg.com/vi/CwfoyVa980U/hqdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455185/17.How_Long_ipary2.mp3",
    }, 

    {
        name: "Attention",
        artist: "Charlie Puth",
        img: "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455240/19.Attention_ki7vq6.mp3",
    }, 

    {
        name: "There's Nothing Holdin' Me Back",
        artist: "Shawn Mendes",
        img: "https://www.rollingstone.com/wp-content/uploads/2018/06/shawn-mendes-theres-nothing-holding-me-back-live-6cbf6da3-11ff-4819-8768-2a8c816f06d2.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456368/Theres_Nothing_Holdin_Me_Back_-_Shawn_Mendes_edkqpo.mp3",
    }, 

    {
        name: "New Rules",
        artist: "Dua Lipa",
        img: "https://a10.gaanacdn.com/gn_img/albums/4Z9bqgo3yQ/Z9bqQGOoby/size_xxl.webp",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455228/21.New_Rules_ehi44o.mp3",
    },
    
    {
        name: "Girls Like You",
        artist: "Maroon 5, Cardi B",
        img: "https://i1.sndcdn.com/artworks-000386942226-i4u2y9-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455358/22.Girls_Like_You__feat._Cardi_B_mycmq5.mp3",
    },

    {
        name: "Game Of Thrones Theme Song",
        artist: "London Music Works",
        img: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455239/23.Game_of_Thrones_-_Theme_r7lhfz.mp3   ",
    },

    {
        name: "Falling",
        artist: "Trevor Daniel",
        img: "https://i.pinimg.com/originals/da/e2/29/dae2293b45da40c603f7f98a1a5c8b1d.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455287/24.Falling_hcuaed.mp3",
    },

    {
        name: "Dream",
        artist: "Shawn Mendes",
        img: "https://wp.dailybruin.com/images/2020/12/web.ae_.shawnmendes.review.courtesy.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455321/25.Dream_qgxnjw.mp3",
    },

    {
        name: "Bloom",
        artist: "The Paper Tracks",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Bloom_-_Renegade_single_cover.jpg/220px-Bloom_-_Renegade_single_cover.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455366/26.Bloom__Online_Bonus_Track_stmiww.mp3",
    },

    {
        name: "Drive",
        artist: "Oh Wonder",
        img: "http://a10.gaanacdn.com/images/albums/48/1464748/crop_480x480_1464748.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455398/27.Drive_yhm8ux.mp3",
    },

    {
        name: "How you like That",
        artist: "BlackPink",
        img: "https://www.hellokpop.com/wp-content/uploads/2020/06/BLACKPINK-4-e1593310494285.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455396/28.How_You_Like_That_asyult.mp3",
    },

    {
        name: "Pretty Savage",
        artist: "BlackPink",
        img: "https://i.ytimg.com/vi/dclzcRYHyWs/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455453/29.Pretty_Savage_g2i6ng.mp3",
    },

    {
        name: "Love Shot",
        artist: "EXO",
        img: "https://i.scdn.co/image/ab67616d0000b273f7da7c0f322b7a1c95190d92",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455487/30.Love_Shot_oe9lb9.mp3",
    },

    {
        name: "DDU-DU DDU-DU",
        artist: "BlackPink",
        img: "https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455504/31.DDU-DU_DDU-DU_bqgxah.mp3",
    },

    {
        name: "NUNA NANA",
        artist: "Jessi",
        img: "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(jpg)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1596119442/55235471.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455535/32.NUNU_NANA_w9n1sf.mp3",
    },

    {
        name: "Dance Monkey",
        artist: "Tones and I",
        img: "https://i.ytimg.com/vi/0Yy9YzdmTJA/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455523/33.Dance_Monkey__8D_Audio_i94sp3.mp3",
    },

    {
        name: "Alone",
        artist: "Alan Walker, Ava Max",
        img: "https://i1.sndcdn.com/artworks-000658872604-2odg0a-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455581/34.Alone_Pt._II_jcitg3.mp3",
    },  

    
    {
        name: "Love Your Voice",
        artist: "JONY",
        img: "http://a10.gaanacdn.com/images/albums/83/2626683/crop_480x480_2626683.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455559/35.Love_Your_Voice_coy5lt.mp3",
    },  
    
    {
        name: "In The End(Remix)",
        artist: "Tommee Profitt, Mellen Gii",
        img: "https://a10.gaanacdn.com/images/albums/9/2450609/crop_480x480_2450609.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455637/36.In_The_End_-_Mellen_Gi_Remix_vavgfu.mp3",
    },  

    {
        name: "Señorita",
        artist: "Shawn Mendes, Camilla Cabello",
        img: "http://i1.sndcdn.com/artworks-000610058968-nebvy6-t500x500.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455611/37.Se%C3%B1orita__8D_Audio_hobjbs.mp3",
    },  

    
    {
        name: "Closer",
        artist: "The Chainsmokers",
        img: "https://i.pinimg.com/736x/01/e0/81/01e0816d6879c5d466d30a01671c9635.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455660/38.Closer__8D_Audio_e8u16f.mp3",
    }, 
    
    
    {
        name: "Roxane",
        artist: "Arizona Zerves",
        img: "http://a10.gaanacdn.com/images/albums/70/2993170/crop_480x480_2993170.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455651/39.ROXANNE_po2kjy.mp3",
    }, 

    {
        name: "Cradels",
        artist: "Sub Urban",
        img: "https://i.pinimg.com/originals/b2/5b/5f/b25b5f585ab8e5850f0ce0aa21efd70a.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455713/40.Cradles_rf2cpt.mp3",
    },
    
    {
        name: "Lily",
        artist: "Alan Walker, K-391",
        img: "https://i.ytimg.com/vi/WIzTaBnae2Y/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455759/41.Lily_admhc4.mp3",
    },

    {
        name: "Bella Ciao",
        artist: "Hardwell, Maddix",
        img: "https://www.bosspiano.com/sheets/bella-ciao-la-casa-de-papel-soundtrack-italian-folk-songs.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455769/42.Bella_Ciao_un3pct.mp3",
    },

    {
        name: "Flames",
        artist: "R3HAB, ZAYN",
        img: "https://i.ytimg.com/vi/r32IDx01CeU/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455772/43.Flames__with_ZAYN_gymsgl.mp3",
    },

    {
        name: "Blah Blah Blah",
        artist: "Armin Van  Buuren",
        img: "https://i.ytimg.com/vi/mfJhMfOPWdE/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455781/44.Blah_Blah_Blah_vkjfgv.mp3",
    },

    {
        name: "What if I told that I love you?",
        artist: "Ali Gate",
        img: "https://i.ytimg.com/vi/z6Jki9FEZfI/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455851/45.What_If_I_Told_You_That_I_Love_You_i79lme.mp3",
    },

    {
        name: "Legends Never Die",
        artist: "Against the Current",
        img: "https://i.ytimg.com/vi/4Q46xYqUwZQ/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455825/46.Legends_Never_Die_guntto.mp3",
    },

    {
        name: "The Chicken Beat",
        artist: "Ricky Dektop",
        img: "https://i.ytimg.com/vi/7fk6mku5qfA/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455789/47.The_Chicken_Wing_Beat_qsaukn.mp3",
    },

    {
        name: "See You Again",
        artist: "Wiz Khalifa, Charlie Puth",
        img: "https://i.pinimg.com/originals/10/a5/53/10a553d05826225522942cb5d3b09989.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455903/48.See_You_Again__feat._Charlie_Puth_anpscp.mp3",
    },

    {
        name: "LA Girls",
        artist: "Charlie Puth",
        img: "https://i.ytimg.com/vi/iW3Than5jrs/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455901/49.LA_Girls_bzdass.mp3",
    },

    {
        name: "Empty Cups",
        artist: "Charlie Puth",
        img: "https://i.ytimg.com/vi/2xXkdvM4CJg/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455918/50.Empty_Cups_my54jv.mp3",
    },

    {
        name: "The Way I am",
        artist: "Charlie Puth",
        img: "https://i.ytimg.com/vi/EQnk-h-LCpQ/sddefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455902/51.The_Way_I_Am_dbrkn7.mp3",
    },

    {
        name: "We Don't Talk Anymore",
        artist: "Charlie Puth, Selena Gomez",
        img: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455944/52.We_Dont_Talk_Anymore__feat._Selena_Gomez_u013xx.mp3",
    },

    {
        name: "Then There's You",
        artist: "Charlie Puth",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBsOmNjUTDbp6mbJnjt6c02ER5fOHefRIVJk2K_lUYbZnnpWInA0bIGrmHD_UKoSApXU&usqp=CAU",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455994/53.Then_Theres_You_mkxge1.mp3",
    },

    {
        name: "Her Life",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/ti4lRgGUQ2I/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620455999/54.Her_Life_btdsd9.mp3",
    },

    {
        name: "Quick Musical Doodles",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/ti4lRgGUQ2I/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456030/55.Quick_Musical_Doodles_kfrjvv.mp3",
    },

    {
        name: "Quick Musical Doodles",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/ti4lRgGUQ2I/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456030/55.Quick_Musical_Doodles_kfrjvv.mp3",
    },

    {
        name: "Hurt People",
        artist: "Two Feet",
        img: "http://a10.gaanacdn.com/images/albums/11/2570611/crop_480x480_2570611.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456008/56.Hurt_People_shjeds.mp3",
    },

    {
        name: "Back Of My Mind",
        artist: "Two Feet",
        img: "https://i.ytimg.com/vi/6pDTxii0a2Y/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456044/57.Back_Of_My_Mind_ccyczg.mp3",
    },

    {
        name: "Playing With Fire",
        artist: "Sam Tinnesz, Yatch Money",
        img: "https://i.ytimg.com/vi/yzVQkO92wNw/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456058/58.Play_with_Fire__feat._Yacht_Money_xaqpjb.mp3",
    },

    {
        name: "Wake Up",
        artist: "Trevor Daniel",
        img: "https://i.scdn.co/image/ab67616d0000b273fd6f147c3db719455c15e221",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456088/59.Wake_Up_nuka11.mp3",
    },

    {
        name: "2002",
        artist: "Anne-Marie",
        img: "http://a10.gaanacdn.com/images/albums/52/2121452/crop_480x480_2121452.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456135/60.2002_wcrvva.mp3",
    },

    {
        name: "Lonely Star",
        artist: "Oh Wonder",
        img: "https://assets.rjassets.com/static/mp3/perfect-q-lonely-star/fdcb3dbb3cd8353.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456181/61.Lonely_Star_xjx5bo.mp3",
    },

    {
        name: "Keep on Dancing",
        artist: "Oh Wonder",
        img: "https://1.bp.blogspot.com/--2omw78dm1Q/Xq6sNkl-0nI/AAAAAAAASSk/paCSOXFseHYxIEJqWRMEpgfIdfc30M8jwCLcBGAsYHQ/s1600/20200503_183351.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456177/62.Keep_On_Dancing_f6b2qb.mp3",
    },

    {
        name: "1999",
        artist: "John K",
        img: "https://i.ytimg.com/vi/dsFqJgySglo/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456148/63.1999_oxag4b.mp3",
    },

    {
        name: "Rum n Tequila",
        artist: "John K",
        img: "https://i.ytimg.com/vi/dsFqJgySglo/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456129/64.Rum_n_Tequila_z9ljp2.mp3",
    },

    {
        name: "If we never met",
        artist: "John K",
        img: "https://i.ytimg.com/vi/dsFqJgySglo/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456152/65.if_we_never_met_mzvwzi.mp3",
    },

    {
        name: "Only One King",
        artist: "Tomnee Profitt, Jung Youth",
        img: "https://i.ytimg.com/vi/3BFuQicL2WI/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456238/66.Only_One_King_fgqowp.mp3",
    },

    {
        name: "Blood in Water",
        artist: "Grandson",
        img: "https://i.ytimg.com/vi/Sk-U8ruIQyA/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456277/67.Blood_--_Water_uwrfun.mp3",
    },

    {
        name: "Born For This",
        artist: "The Score",
        img: "https://i.ytimg.com/vi/aJ5IzGBnWAc/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456277/68.Born_For_This_wama1p.mp3",
    },

    {
        name: "No Firends",
        artist: "Cadmium, Rosendale",
        img: "https://i.ytimg.com/vi/O61zYuLECAI/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456306/69.No_Friends_t9r8q0.mp3",
    },

    {
        name: "Blame It On Kids",
        artist: "AViVA",
        img: "https://i.ytimg.com/vi/Z9lKN_X152Q/maxresdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456323/70.BLAME_IT_ON_THE_KIDS_fkhy9i.mp3",
    },

    {
        name: "Peaches",
        artist: "Justin Bieber",
        img: "https://pbs.twimg.com/media/EvKvICWXUAQxyCw.jpg:large",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456294/71.Peaches__feat._Daniel_Caesar__Giveon_cyibwj.mp3",
    },

    {
        name: "Awaara",
        artist: "Badshah, Reet Talwar",
        img: "https://lyricsraag.com/wp-content/uploads/2020/11/Awaara-lyrics-Badshah-Ft.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456351/72.Awaara__feat._Reet_Talwar_gfmkel.mp3",
    },

    {
        name: "Savage Love",
        artist: "Jawsh685, Jason Derulo",
        img: "https://i.ytimg.com/vi/21SG1EGkosE/hqdefault.jpg",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456361/73.Savage_Love__Laxed_-_Siren_Beat_pqfojw.mp3",
    },

    {
        name: "Astronaut in The Ocean",
        artist: "Masked wolf",
        img: "https://upload.wikimedia.org/wikipedia/en/7/75/Masked_Wolf_-_Astronaut_in_the_Ocean.png",
        src: "https://res.cloudinary.com/shrit1401/video/upload/v1620456346/74.Astronaut_In_The_Ocean_xriltp.mp3",
    },
]