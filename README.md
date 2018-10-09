# PhotoAlbum

Cloudinary Angular Photo Album Sample
=======================================

This sample project shows:

1. How to use the Cloudinary Angular directives.
2. How to upload files to Cloudinary in an unsigned manner, using an upload preset. The upload control is based on the open source file uploader [ng2-file-upload](https://github.com/valor-software/ng2-file-upload)
3. How to use the dynamic list resource in order to maintain a short list of resources aggregated by tags.
4. How to delete an image uploaded from the browser with an unsigned upload. You can find additional details in this [knowledge base article](https://support.cloudinary.com/hc/en-us/articles/202521132-How-to-delete-an-image-from-the-client-side-). Don't forget to set the `Return delete token` setting of your unsigned upload preset to `true`.

## Configuration ##

There are some settings you need to change for this demo to work. Copy or rename `app/config.ts.sample` to `app/config.ts` and edit the following:

1. **cloud_name** - Should be change to the cloud name you received when you registered for a Cloudinary account.
2. **upload_preset** - You should first "Enable unsigned uploads" in the ["Upload Settings"](https://cloudinary.com/console/settings/upload) of your Cloudinary console and assign the resulting preset name to that field. Note, you may want to tweak and modify the upload preset's parameters.
3. **cloud_folder** **cloud_tag** - Set these to your preferences.
4. Additionally, in your Cloudinary console in the ["Security Settings"](https://cloudinary.com/console/settings/security) section you should uncheck the "list" item.

## Setup ##

Run `npm install` to install the required dependencies for this module.

## Running ##

Run `ng serve` to start the server and automatically open a browser and navigate to the application's url.

The application is deployed at http://localhost:4200/

## Internals ##
The sample creates a new NgModule, and depends on CloudinaryModule which is imported from the SDK module.

### Sample main components ###

#### Routing ####

The application routes are defined in [app/js/app.routing.ts](app/js/app.routing.ts)

The application has 2 routes:

* **/photos** - Presents a list of images tagged by `sample_tag`
* **/photos/new** - Presents an upload control that allows uploading multiple files by a file input or drag-and-grop.
Uploads have a dynamic progress bar. In addition it displays the details of successful uploads.  

The default route is set to `/photos`.

#### Services ####
[photo-album.service.ts](app/js/model/photo-album.service.ts) retrieves the list of images from Cloudinary based on the `sample_tag` tag name.

#### Components ####
> Photo list
* [photo-list.component.ts](app/js/photo-list/photo-list.component.ts) sets up the list of images displayed via one-way binding by [photo-list.component.html](app/js/photo-list/photo-list.component.html)
* [photo-list.component.html](app/js/photo-list/photo-list.component.html) displays the bound images and displays basic transformations for each image

> Photo Upload
* [photo-upload-.component.ts](app/js/photo-upload-jquery.component.ts) initializes the upload widget and sets up listeners on the progress events.
* [photo-upload-.component.html](photo-upload-jquery.component.html) displays the upload control and lists the properties of the uploaded images once upload completes successfully.

**Important observations**:
* This implementation is based on an Angular file uploader.
* Changes to the title field are propagated to the `formData` being sent in the upload request. This is meant to illustrate the possibility of attaching extra meta-data to each upload image.
* The upload control uses the `upload_preset` we configured in Configuration step. This uses the settings defined on Cloudinary side to process the uploaded file.

### Unsigned Upload ###

In order to add images to our photo album that would later be retrievable from the Cloudinary service we must select a tag which will serve as our source for the list. In this case the tag in app/config.ts.
While this tag can be set in the upload preset and remain hidden from the client side, in this sample we included it in the request itself to make this sample work without further configuration steps.

### List Resource ###

Cloudinary supports a JSON list resource. 
This list represents all resources marked with a specific tag during upload (or later through other APIs).
Whenever a new resource is uploaded with a tag, or an existing resource already tagged is deleted then the list is recalculated. 
This enables you to group a list of resources which can be retrieved by a single query. The size of the list is currently limited to 100 entires.
[Learn more](http://cloudinary.com/documentation/image_transformations#client_side_resource_lists)



### Notes ###
As I am completely new to angular 6 programming this source is provided as-is. I wanted to write something that worked with an Angular6 app more or less out-of-the-generator so I can incorporate Cloudinary into my own apps.

Source originally taken from cloudinary_angular.
