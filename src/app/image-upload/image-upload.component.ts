import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'image-upload',
    styleUrls: ['image-upload.component.scss'],
    templateUrl: 'image-upload.component.html',
})
export class ImageUploadComponent implements OnInit {

    /**
     * You can override default dropZone area template with [dropZoneTemplate] parameter passed to fileDroppa component
     */
    //public dropZoneTemplate = `
    //    <div class="awesome_override_xxx">Here I'm overriding library template</div>
    //`;
    /**
     * EVENTS
     */
    fileUploaded(success, response, file){
        success && console.log("uploaded - awesome", response, file);
        success || console.log("not uploaded - very bad", response, file);
    }

    filesUpdated(files) {
        console.log("Store state updated! Current state: ", files)
    }

    /**
     * CALLBACKS
     */

    /**
     * This method is called before Request happened
     * You can modify xhr confoguration in it
     * requestHeaders for example
     *
     * @param xhr
     */
    beforeRequest(xhr){
        // TODO: dispatch action
        xhr.setRequestHeader("Hello","World");
    }

    /**
     * This method allows you to make validation before file is sent
     * You can update fileName for example
     * Or you can return null and file won't be send
     *
     * @param formData
     * @returns formData or null
     */
    beforeFileUpload(formData){
        // TODO: add sha256
        console.log(formData);
        return formData;
    }

    /**
     * This method is called once your drop or select files
     * You can validate and decline or accept file
     *
     * @param file
     * @returns Boolean
     */
    beforeAddFile(file){
        // TODO: validate file type
        return true;
    }

    public ngOnInit() {
    }
}
