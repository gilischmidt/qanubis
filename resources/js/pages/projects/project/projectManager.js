import ProjectUiManager from "./projectUiManager";
import AjaxHelper from "../helpers/ajaxHelper";

export default class ProjectManager {
    constructor() {
        this.projectUiManager = new ProjectUiManager(this);
        this.projectData = {};
    }

    async update(data) {
        let manager = this;

        AjaxHelper.ajaxCall({
                method: 'PATCH',
                url: appRoutes.project.update,
                data: data,
            }
        ).then(function (result) {
            return new Promise((resolve, reject) => {
                try {
                    manager.projectData = result;
                    projectName = result.name;
                    $('.project-name').html(result.name);
                    $('.project-description').html(result.description);

                    resolve(result);
                } catch (e) {
                    console.error(e);
                    reject('fatal');
                }
            });
        });
    }

    static getInstance() {
        if (ProjectManager.instance === undefined) {
            ProjectManager.instance = new ProjectManager();
        }

        return ProjectManager.instance;
    }
}
