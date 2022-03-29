const express = require('express')
const app = express()
const port = 3000

const pgp = require("pg-promise")(/*options*/);
const db = pgp("postgres://kuryandb:228@database:5432/datakkp");

app.get('/api/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send("test")
})

app.get('/api/mcu', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM mcu LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(mcu => {
            db.any('SELECT COUNT(id) FROM mcu')
                .then(count => {
                    res.send({total: count[0].count, data: mcu})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/mcu/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'mcu\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/sensor', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM sensor LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(sensor => {
            db.any('SELECT COUNT(id) FROM sensor')
                .then(count => {
                    res.send({total: count[0].count, data: sensor})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/sensor/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'sensor\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/place', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM place LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(place => {
            db.any('SELECT COUNT(id) FROM place')
                .then(count => {
                    res.send({total: count[0].count, data: place})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/place/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'place\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/sm_cross', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM sm_cross LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(smc => {
            db.any('SELECT COUNT(id) FROM sm_cross')
                .then(count => {
                    res.send({total: count[0].count, data: smc})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/sm_cross/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'sm_cross\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/smc_p_cross', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM smc_p_cross LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(smcpc => {
            db.any('SELECT COUNT(id) FROM smc_p_cross')
                .then(count => {
                    res.send({total: count[0].count, data: smcpc})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/smc_p_cross/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'smc_p_cross\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/sdata', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT * FROM sdata ORDER BY datetime LIMIT $1 OFFSET $2', [req.query.size, req.query.page * req.query.size])
        .then(sdata => {
            db.any('SELECT COUNT(id) FROM sdata')
                .then(count => {
                    res.send({total: count[0].count, data: sdata})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error);
        });
})

app.get('/api/sdata/columns', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT column_name FROM information_schema.columns WHERE table_schema = \'public\' AND table_name = \'sdata\'')
        .then(columns => {
            res.send(columns)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/fill', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    try {
        const currentDate = new Date()
        const previousDate = new Date(currentDate - 3110400000)
        db.any('SELECT id FROM smc_p_cross')
            .then(data => {
                const inserts = []
                data.forEach(item => {
                    for (let i = 0; i < 100000; i++) {
                        inserts.push({
                            value: generateValue(),
                            datetime: randomDate(currentDate, previousDate),
                            smcpc_id: item.id
                        })
                    }
                })
                const query = pgp.helpers.insert(inserts, ['value', 'datetime', 'smcpc_id'], 'sdata')
                db.none(query).then(
                    () => res.send({filled: true}),
                    (error) => res.send(error)
                )
            })
            .catch()
    } catch (error) {
        res.send(error)
    }
})

app.get('/api/delete', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.none('TRUNCATE sdata')
        .then(() => res.send({deleted: true}))
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/mcu/name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT name FROM mcu')
        .then(names => {
            res.send(names)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/sensor/name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT name FROM sensor')
        .then(names => {
            res.send(names)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/place/name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    db.any('SELECT name FROM place')
        .then(names => {
            res.send(names)
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/mcu/chart', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    const datetime = (Date.now() - (req.query.hours * 60 * 60000)) / 1000.0
    db.any('SELECT DISTINCT sensor.name FROM sensor JOIN sm_cross ON sensor.id = sm_cross.sensor_id JOIN mcu ON sm_cross.mcu_id = mcu.id JOIN smc_p_cross ON sm_cross.id = smc_p_cross.smc_id JOIN sdata ON smc_p_cross.id = sdata.smcpc_id WHERE mcu.name = $1 AND sdata.datetime >= to_timestamp($2)', [req.query.name, datetime])
        .then(names => {
            db.any('SELECT sensor.name, sdata.datetime, sdata.value FROM sensor JOIN sm_cross ON sensor.id = sm_cross.sensor_id JOIN mcu ON sm_cross.mcu_id = mcu.id JOIN smc_p_cross ON sm_cross.id = smc_p_cross.smc_id JOIN sdata ON smc_p_cross.id = sdata.smcpc_id WHERE mcu.name = $1 AND sdata.datetime >= to_timestamp($2) ORDER BY sdata.datetime', [req.query.name, datetime])
                .then(data => {
                    res.send({names: names, data: data})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/sensor/chart', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    const datetime = (Date.now() - (req.query.hours * 60 * 60000)) / 1000.0
    const names = [{name: req.query.name}]
    db.any('SELECT sensor.name, sdata.datetime, sdata.value FROM sensor JOIN sm_cross ON sensor.id = sm_cross.sensor_id JOIN smc_p_cross ON sm_cross.id = smc_p_cross.smc_id JOIN sdata ON smc_p_cross.id = sdata.smcpc_id WHERE sensor.name = $1 AND sdata.datetime >= to_timestamp($2) ORDER BY sdata.datetime', [req.query.name, datetime])
        .then(data => {
            res.send({names: names, data: data})
        })
        .catch(error => {
            res.send(error)
        })
})

app.get('/api/place/chart', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    const datetime = (Date.now() - (req.query.hours * 60 * 60000)) / 1000.0
    db.any('SELECT DISTINCT sensor.name FROM sensor join sm_cross ON sensor.id = sm_cross.sensor_id JOIN smc_p_cross ON sm_cross.id = smc_p_cross.smc_id JOIN place ON place.id = smc_p_cross.place_id JOIN sdata ON smc_p_cross.id = sdata.smcpc_id WHERE place.name = $1 AND sdata.datetime >= to_timestamp($2)', [req.query.name, datetime])
        .then(names => {
            db.any('SELECT sensor.name, sdata.datetime, sdata.value FROM sensor join sm_cross ON sensor.id = sm_cross.sensor_id JOIN smc_p_cross ON sm_cross.id = smc_p_cross.smc_id JOIN place ON place.id = smc_p_cross.place_id JOIN sdata ON smc_p_cross.id = sdata.smcpc_id WHERE place.name = $1 AND sdata.datetime >= to_timestamp($2) ORDER BY sdata.datetime', [req.query.name, datetime])
                .then(data => {
                    res.send({names: names, data: data})
                })
                .catch(error => {
                    res.send(error)
                })
        })
        .catch(error => {
            res.send(error)
        })
})

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
    db.any("Select * from mcu").then(data => console.log(data)).catch(error => console.log(error))
    db.any("Select * from place").then(data => console.log(data)).catch(error => console.log(error))
    db.any("Select * from sensor").then(data => console.log(data)).catch(error => console.log(error))
    db.any("Select * from sm_cross").then(data => console.log(data)).catch(error => console.log(error))
    db.any("Select * from smc_p_cross").then(data => console.log(data)).catch(error => console.log(error))
    db.any("Select * from sdata").then(data => console.log(data)).catch(error => console.log(error))
})

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function generateValue() {
    return Math.random() * (99 - 1) - 20;
}