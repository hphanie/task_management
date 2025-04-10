const Task = require('../models/task.model');
const User = require('../models/user.model');

exports.createTask = async (req) => {
  const task = new Task({ ...req.body, owner: req.userId });
  await task.save();
  return task;
};

exports.getTasks = async (req) => {
  return await Task.find({
    $or: [
      { owner: req.userId },
      { sharedWith: req.userId }
    ]
  });
};

exports.updateTask = async (req) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, owner: req.userId },
    req.body,
    { new: true }
  );
  if (!task) throw new Error('Tâche introuvable ou non autorisée');
  return task;
};

exports.deleteTask = async (req) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.userId });
  if (!task) throw new Error('Tâche introuvable ou non autorisée');
  return { message: 'Tâche supprimée' };
};

exports.updateStatus = async (req) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, owner: req.userId },
    { status: req.body.status },
    { new: true }
  );
  if (!task) throw new Error('Tâche introuvable ou non autorisée');
  return task;
};

exports.shareTask = async (req) => {
  const { email } = req.body;
  const task = await Task.findOne({ _id: req.params.id, owner: req.userId });
  if (!task) throw new Error('Tâche introuvable ou non autorisée');

  const userToShare = await User.findOne({ email });
  if (!userToShare) throw new Error('Utilisateur à partager introuvable');

  if (task.sharedWith.includes(userToShare._id))
    throw new Error('Déjà partagé avec cet utilisateur');

  task.sharedWith.push(userToShare._id);
  await task.save();
  return task;
};
