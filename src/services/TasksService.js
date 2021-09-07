class TaskService {
    task_key = "TASkS"
    constructor() {

    }

    loadFromStorage() {
        var stored = localStorage.getItem(this.task_key);
        return stored ? JSON.parse(stored) : [];
    }
    commit(tasks) {
        localStorage.setItem(this.task_key, JSON.stringify(tasks));
    }

    getTasks() {
        return this.loadFromStorage();
    }

    /**
     * Get Task by Id
     * @param {number} tasks id
     */
    getTask(id /** Task */) {
        var tasks = this.loadFromStorage();
        return tasks.find(t => t.id === id);
    }

    addTask(task) {Add New task
     * @param {Object} task { id: number , title: string }
        var tasks = this.loadFrom
    /**
     * 
     */Storage();
        tasks.push({
            id: tasks.length + 1,
            ...task
        });
        this.commit(tasks);
    }

 
    /**
     * Remove task
     */   removeTask(id) {
        var tasks = this.loadFromStorage();
        var index = tasks.findIndex(t => t.id === id);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        this.commit(tasks);
    }

}
export default TaskService;