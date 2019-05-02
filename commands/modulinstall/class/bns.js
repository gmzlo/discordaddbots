exports.run = async(client, message, member) => {
    const bm = message.guild.roles.find("name", "BM");
    const lsm = message.guild.roles.find("name", "LSM");
    const sin = message.guild.roles.find("name", "SIN");
    const wl = message.guild.roles.find("name", "WL");
    const fors = message.guild.roles.find("name", "FOR");
    const war = message.guild.roles.find("name", "WAR");
    const kfm = message.guild.roles.find("name", "KFM");
    const sf = message.guild.roles.find("name", "SF");
    const dm = message.guild.roles.find("name", "DM");
    const gun = message.guild.roles.find("name", "GUN");
    const sum = message.guild.roles.find("name", "SUM");
    var mdn = null;
    var cmn = null;
    var bmn = null;
    var lsmn = null;
    var sinn = null;
    var wln = null;
    var forsn = null;
    var warn = null;
    var kfmn = null;
    var sfn = null;
    var dmn = null;
    var gunn = null;
    var sumn = null;
    
    const rolcen = message.guild.channels.find("name", "roles");
    var rolcenn = null;

    message.channel.send(`checku modules startu :repeat:`);
    if (bm === null){
    message.channel.send(`Modul **BM**: :x: notu inustallu`);
    mdn = 0;
    bmn += 1;	
    } else {
    message.channel.send(`Modul **BM**: :white_check_mark: inustallu`);
    mdn += 1;
    bmn = 0;
    };
    if (lsm === null){
    message.channel.send(`Modul **LSM**: :x: notu inustallu`);
    mdn += 0;
    lsmn += 1;	
    } else {
    message.channel.send(`Modul **LSM**: :white_check_mark: inustallu`);
    mdn += 1;
    lsmn = 0;	
    };
    if (sin === null){
    message.channel.send(`Modul **SIN**: :x: notu inustallu`);
    mdn += 0;
    sinn += 1;	
    } else {
    message.channel.send(`Modul **SIN**: :white_check_mark: inustallu`);
    mdn += 1;
    sinn = 0;	
    };
    if (wl === null){
    message.channel.send(`Modul **WL**: :x: notu inustallu`);
    mdn += 0;
    wln += 1;	
    } else {
    message.channel.send(`Modul **WL**: :white_check_mark: inustallu`);
    mdn += 1;
    wln = 0;	
    };
    if (fors === null){
    message.channel.send(`Modul **FOR**: :x: notu inustallu`);
    mdn += 0;
    forsn += 1;	
    } else {
    message.channel.send(`Modul **FOR**: :white_check_mark: inustallu`);
    mdn += 1;
    forsn = 0;	
    };
    if (war === null){
    message.channel.send(`Modul **WAR**: :x: notu inustallu`);
    mdn += 0;
    warn += 1;	
    } else {
    message.channel.send(`Modul **WAR**: :white_check_mark: inustallu`);
    mdn += 1;
    warn = 0;
    };
    if (kfm === null){
    message.channel.send(`Modul **KFM**: :x: notu inustallu`);
    mdn += 0;
    kfmn += 1;	
    } else {
    message.channel.send(`Modul **KFM**: :white_check_mark: inustallu`);
    mdn += 1;
    kfmn = 0;	
    };
    if (sf === null){
    message.channel.send(`Modul **SF**: :x: notu inustallu`);
    mdn += 0;
    sfn += 1;	
    } else {
    message.channel.send(`Modul **SF**: :white_check_mark: inustallu`);
    mdn += 1;
    sfn = 0;	
    };
    if (dm === null){
    message.channel.send(`Modul **DM**: :x: notu inustallu`);
    mdn += 0;
    dmn += 1;	
    } else {
    message.channel.send(`Modul **DM**: :white_check_mark: inustallu`);
    mdn += 1;
    dmn = 0;	
    };
    if (gun === null){
    message.channel.send(`Modul **GUN**: :x: notu inustallu`);
    mdn += 0;
    gunn += 1;	
    } else {
    message.channel.send(`Modul **GUN**: :white_check_mark: inustallu`);
    mdn += 1;
    gunn = 0;	
    };
    if (sum === null){
    message.channel.send(`Modul **SUM**: :x: notu inustallu`);
    mdn += 0;
    sumn += 1;	
    } else {
    message.channel.send(`Modul **SUM**: :white_check_mark: inustallu`);
    mdn += 1;
    sumn = 0;	
    };   
    console.log(`inustallu modulu coinu: ${mdn}
    BM coinu: ${bmn}
    LSM coinu: ${lsmn}
    SIN coinu: ${sinn}
    WL coinu: ${wln}
    FOR coinu: ${forsn}
    WAR coinu: ${warn}
    KFM coinu: ${kfmn}
    SF coinu: ${sfn}
    DM coinu: ${dmn}
    GUN coinu: ${gunn}
    SUM coinu: ${sumn}
    `);
    if (mdn === 0) {
    message.guild.createRole({
      name: 'BM',
      color: '#ff0202',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
    message.guild.createRole({
      name: 'LSM',
      color: '#527bc4',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
    message.guild.createRole({
      name: 'SIN',
      color: '#00ff19',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
    message.guild.createRole({
    name: 'WL',
        color: '#c803d6',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'FOR',
    color: '#cc870a',
    })
    message.guild.createRole({
    name: 'WAR',
    color: '#a79329',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'KFM',
    color: '#8f88be',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'SF',
    color: '#a59e47',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'DM',
    color: '#dcd4f3',    
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'GUN',
    color: '#917394',    
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.guild.createRole({
    name: 'SUM',
    color: '#ecdf09',    
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
                
    "description": ":white_check_mark:  Classu BnSu modulu botu installu",
    "color": 1693449,
    }
    });
    };
    if (mdn === 1 || mdn === 2 || mdn === 3 || mdn === 4 || mdn === 5 || mdn === 7 || mdn === 8 || mdn === 9 || mdn === 10)	{
    message.channel.send(`notu allu modulesu installu, inustallu startu :repeat:`);
    if (bmn === 1){
    message.guild.createRole({
        name: 'BM',
        color: '#ff0202',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
    message.channel.send({embed:{
                
        "description": ":white_check_mark:  BMu modulu botu installu",
        "color": 1693449,
            }
            }).then(msg => msg.delete(1000));  
    message.channel.send(`.`);  
    } else {
    message.channel.send(`.`);	
    };
    if (lsmn  === 1){
     message.guild.createRole({
        name: 'LSM',
        color: '#527bc4',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
      message.channel.send({embed:{
                
        "description": ":white_check_mark:  SLMu modulu botu installu",
        "color": 1693449,
            }
            }).then(msg => msg.delete(1000));
    message.channel.send(`..`);  
    } else {
    message.channel.send(`..`);	
    };
    if (sinn  === 1){
     message.guild.createRole({
        name: 'SIN',
        color: '#00ff19',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
        message.channel.send({embed:{
                
        "description": ":white_check_mark:  SINu modulu botu installu",
        "color": 1693449,
            }
            }).then(msg => msg.delete(1000));
    message.channel.send(`...`);
    } else {
    message.channel.send(`...`);
    };
    if (wln  === 1){
    message.guild.createRole({
    name: 'WL',
    color: '#c803d6',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
                   
    "description": ":white_check_mark:  WLu modulu botu installu",
    "color": 1693449,
        }
        }).then(msg => msg.delete(1000));
    message.channel.send(`....`);
    } else {
    message.channel.send(`....`);
    }
    if (forsn === 1){
    message.guild.createRole({
    name: 'FOR',
    color: '#cc870a',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{

    "description": ":white_check_mark:  FORu modulu botu installu",
    "color": 1693449,    
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`.....`);
    } else {
    message.channel.send(`.....`);
    }
    if (warn === 1){
    message.guild.createRole({
    name: 'WAR',
    color: '#a79329',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
    
    "description": ":white_check_mark:  WARu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`......`);
    } else{
    message.channel.send(`......`);
    }
    if(kfmn === 1){
    message.guild.createRole({
    name: 'KFM',
    color: '#8f88be',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
    
    "description": ":white_check_mark:  KFMu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`.......`);
    } else{
    message.channel.send(`.......`);
    }
    if(sfn === 1){
    message.guild.createRole({
    name: 'SF',
    color: '#a59e47',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
        
    "description": ":white_check_mark:  SFu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`........`);
    } else{
    message.channel.send(`........`);
    }
    if(dmn === 1){
    message.guild.createRole({
    name: 'DM',
    color: '#dcd4f3',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
     message.channel.send({embed:{
            
    "description": ":white_check_mark:  DMu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`.........`);
    } else{
    message.channel.send(`.........`);
    }
    if(gunn === 1){
    message.guild.createRole({
    name: 'GUN',
    color: '#917394',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
                
    "description": ":white_check_mark:  GUNu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`..........`);
    } else{
    message.channel.send(`..........`);
    }
    if(sumn === 1){
    message.guild.createRole({
    name: 'SUM',
    color: '#ecdf09',
    })
    .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
    .catch(console.error)
    message.channel.send({embed:{
                    
    "description": ":white_check_mark:  SUMu modulu botu installu",
    "color": 1693449,
    }
    }).then(msg => msg.delete(1000));
    message.channel.send(`...........`)
    message.channel.send({embed:{
                
    "description": ":white_check_mark:  Classu BnSu modulu botu installu",
    "color": 1693449,
    }
    });
    } else{
    message.channel.send(`...........`)
    message.channel.send({embed:{
                
    "description": ":white_check_mark:  Classu BnSu modulu botu installu",
    "color": 1693449,
    }
    });
    };		
        }; 
        if ( mdn === 11){
        message.channel.send({embed:{
                
        "description": ":x: Classu BnSu modulu botu installu, installu modules notu startu",
        "color": 15337994,
            }
            });
        }
    message.channel.send(`checku channale startu :repeat:`);
    if (rolcen === null){
    message.channel.send(`Channale **roles**: :x: notu inustallu`);
    cmn = 0;
    rolcenn += 1;
    } else{
    message.channel.send(`Channale **roles**: :white_check_mark: inustallu`);
    cmn += 1;
    rolcenn = 0;
    };
    console.log(`inustallu channalu coinu: ${cmn}
    Roles Channalu Coinu: ${rolcenn}
    `);
    if (cmn === 0){
    message.guild.createChannel("roles", "text");
    message.channel.send({embed:{
                
    "description": ":white_check_mark:  Classu BnSu chanallu botu installu",
    "color": 1693449,
    }
    });
    setTimeout(function() {
        message.guild.channels.find("name", "roles").send(`hello nya itsu Roleu Verificationu nya Watashi wa givu roleu you nidu tachu Reactu`).then(function (message) {message.react("571028462912012328"), message.react("571028463000092692"), message.react("571028462597570561"), message.react("571028463063138307"), message.react("571028462719205397"), message.react("571028462937309214"), message.react("571028462949761024"), message.react("571028462941503489"), message.react("571028462954086410"), message.react("571028462983446528"), message.react("571028462593376257")})
    }, 10000) 
}else{
    message.channel.send({embed:{
                
    "description": ":x: Classu BnSu chanallu botu installu, installu chanallu notu startu",
    "color": 15337994,
    }
    });    
}
}