import { Goal, Task } from "../types/types";
import { GoalModel, TaskModel } from "../../../models/mongo/index";

const resolvers = {
  Query: {
    goals: async () => await GoalModel.find(),
    goal: async (_: unknown, _id: string) => await GoalModel.findById(_id),
    tasks: async () => await TaskModel.find(),
    task: async (_: unknown, _id: string) => await TaskModel.findById(_id),
    test: async (_: unknown, bool: boolean) => {
      bool;
    },
  },
  Mutation: {
    createGoal: async (_: unknown, { name, description }: Goal) => {
      try {
        const newGoal = new GoalModel({ name, description });
        const savedGoal = await newGoal.save();

        return savedGoal;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    deleteGoal: async (_: unknown, _id: string) => {
      try {
        const deletedGoal = await GoalModel.findByIdAndDelete(_id);
        if (!deletedGoal) throw new Error("Goal not found");
        await TaskModel.deleteMany({ _id });
        return deletedGoal;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    updateGoal: async (_: unknown, args: Goal) => {
      try {
        const updatedGoal = await GoalModel.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (!updatedGoal) throw new Error("Goal not found");
        return updatedGoal;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    createTask: async (_: unknown, { description, projectId }: Task) => {
      try {
        const goalFound = await GoalModel.findById(projectId);
        if (!goalFound) throw new Error("Project not found");
        const newTask = new TaskModel({ description, projectId });
        const savedTask = await newTask.save();

        return savedTask;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    deleteTask: async (_: unknown, _id: string) => {
      try {
        const deletedTask = await TaskModel.findByIdAndDelete(_id);
        if (!deletedTask) throw new Error("Task not found");
        return deletedTask;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
    updateTask: async (_: unknown, args: Goal) => {
      try {
        const updatedTask = await GoalModel.findByIdAndUpdate(args._id, args, {
          new: true,
        });
        if (!updatedTask) throw new Error("Task not found");
        return updatedTask;
      } catch (e) {
        e instanceof Error && console.error(e.message);
      }
    },
  },
  Goal: {
    tasks: async (parent: Goal) =>
      await TaskModel.find({ projectId: parent._id }),
  },
};

export { resolvers };
