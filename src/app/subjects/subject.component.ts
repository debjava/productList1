import { Component } from "@angular/core";

@Component({
    selector: 'app-subjects',
    templateUrl: './subject.component.html'
})

export class Subjects {
    messageToDisplay: string = "The following subjects I studied in college."
    coreSubjects: any[] = [
        {
            "subjectId": "1",
            "subjectName": "Physics"
        },
        {
            "subjectId": "2",
            "subjectName": "Chemistry"
        },
        {
            "subjectId": "3",
            "subjectName": "Mathematics"
        }
    ];

}