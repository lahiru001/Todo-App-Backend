const Task = require('./model');

const getTasks=((req,res,next)=>{
    Task.find().
        then(response=>{
            res.json({response});
        }).catch((error)=>{
            res.json({error});
        });
});


const addTask=((req,res,next)=>{
    const task = new Task({
        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        category:req.body.category
    });

    task.save()
        .then((response)=>{
            res.json({response});
        }).catch((error)=>{
            res.json({error});
        });

});

const updateTask=((req,res)=>{
    const {id,title,description,category} = req.body;
    Task.updateMany({id:id},{$set:{title:title,description:description,category:category}})
    .then((response)=>{
        res.json({response});
    }).catch((error)=>{
        res.json({error});
    });
});

const deleteTask=((req,res)=>{
    const id = req.body.id;
    Task.deleteOne({id:id})
    .then((response)=>{
        res.json({response});
    }).catch((error)=>{
        res.json({error});
    });
});

module.exports.getTasks = getTasks;
module.exports.addTask = addTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;