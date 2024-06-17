export const getGoals = (req, res) => {
  res.json({
    message: "Get All Goals!",
  });
};

export const createGoal = (req, res) => {
  res.json({
    message: "Creating a New Goal!",
  });
};

export const editGoal = (req, res) => {
  res.json({
    message: "Edit a Goal!",
  });
};

export const deleteGoal = (req, res) => {
  res.json({
    message: "Delete a Goal!",
  });
};
