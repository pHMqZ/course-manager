import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseInfoComponent
],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])

    ]
})
export class CourseModule{

}