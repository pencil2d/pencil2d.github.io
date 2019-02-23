---
layout: page
title: Share Projects
tagline: "Help Pencil2D development by sharing your projects with us."
comments: false
---

Hello and thank you for your interest in helping to improve Pencil2D! You can use the form below to easily share project files with us.

### Why do we want your Pencil2D projects?

Some people may wonder why we are looking for other people's project files when we can just create our own. Unfortunately, creating animations takes lots of time and effort which could be used to improve the software. Furthermore, even if we did make our own animations to test Pencil2D with, they may not accurately reflect the types or variety of animations that our users are typically using Pencil2D for. Everything from your hardware, to Pencil2D version, to computer settings can potentially affect your project in ways that our developers can't mimic. To assure that *your projects* on in *your environment* work as well as possible, there is really no substitute for testing new versions and features with *your work*.

You may also wonder what exactly we will do with your project. By default, when your project has been uploaded it will be shared with a trusted set of developers and quality assurance testers who have agreed not to use or share your work for anything other than testing various aspects of Pencil2D. Here are examples of some things we might use your project to:
- Gather statistics on average project length, file sizes, camera resolutions, and other settings to make more informed design decisions.
- Test new version of the program to assure that your projects continue to be usable in future versions of Pencil2D.
- Test a wide assortment of new features. Some of the features that we currently wish to run tests on could result in lower file sizes, higher export quality, and lower resource consumption for your animations.

If you opt-in to licensing your work publicaly, we may also use your project for things such as:
- Videos showcasing examples of animation that can be created with Pencil2D, similar to [our first user showcase](https://www.youtube.com/watch?v=aa9PCu_UZpg).
- Video tutorials demonstrating how to use features in Pencil2D.
- Screenshots for our official user manuals.
All public uses of your project will be accompanied with proper attribution to you.

### Project file submission

<div class="container">
  <span class="btn btn-success fileinput-button">
    <i class="glyphicon glyphicon-plus"></i>
    <span>Add files...</span>
    <!-- The file input field used as target for the file upload widget -->
    <input id="fileupload" type="file" name="files[]" multiple>
  </span>
  <br>
  <br>
  <!-- The global progress bar -->
  <div id="progress" class="progress">
    <div class="progress-bar progress-bar-success"></div>
  </div>
  <!-- The container for the uploaded files -->
  <div id="files" class="files"></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" crossorigin="anonymous"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha384-Dziy8F2VlJQLMShA6FHWNul/veM9bCkRUaLqr199K94ntO5QUrLJBEbYegdSkkqX" crossorigin="anonymous"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.28.0/js/jquery.iframe-transport.min.js" integrity="sha256-64JcdNc4W47Ue2P1/xTqUx2OMXyQZXT4mM9jwstqy8Y=" crossorigin="anonymous"></script>
<!-- The basic File Upload plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.28.0/js/jquery.fileupload.min.js" integrity="sha256-rFUfBX6nxajRE557glMx+ybBdfL9NXf8woMA1M1Tw0w=" crossorigin="anonymous"></script>
<!-- The File Upload processing plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.28.0/js/jquery.fileupload-process.min.js" integrity="sha256-ePcoK5ltgAtj9CuyPsYFB+HOjKLOcpjJJLTANg1ZUCI=" crossorigin="anonymous"></script>
<!-- The File Upload validation plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.28.0/js/jquery.fileupload-validate.min.js" integrity="sha256-c96UMs+q+WrxgiUMpS0QQWEZvJrgmErvOV6T4UsiK/A=" crossorigin="anonymous"></script>

<script>
$(function () {
    'use strict';
    // Change this to the location of your server-side upload handler:
    var url = "http://pencil2dupload.ddns.net/jQuery-File-Upload/server/php/',
        uploadButton = $('<button/>')
            .addClass('btn btn-primary')
            .prop('disabled', true)
            .text('Processing...')
            .on('click', function () {
                var $this = $(this),
                    data = $this.data();
                $this
                    .off('click')
                    .text('Abort')
                    .on('click', function () {
                        $this.remove();
                        data.abort();
                    });
                data.submit().always(function () {
                    $this.remove();
                });
            });
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(pclx|zip)$/i,
        maxFileSize: 2000000000,
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: true
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
            var node = $('<p/>')
                    .append($('<span/>').text(file.name));
            if (!index) {
                node
                    .append('<br>')
                    .append(uploadButton.clone(true).data(data));
            }
            node.appendTo(data.context);
        });
    }).on('fileuploadprocessalways', function (e, data) {
        var index = data.index,
            file = data.files[index],
            node = $(data.context.children()[index]);
        if (file.preview) {
            node
                .prepend('<br>')
                .prepend(file.preview);
        }
        if (file.error) {
            node
                .append('<br>')
                .append($('<span class="text-danger"/>').text(file.error));
        }
        if (index + 1 === data.files.length) {
            data.context.find('button')
                .text('Upload')
                .prop('disabled', !!data.files.error);
        }
    }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
    }).on('fileuploaddone', function (e, data) {
        $.each(data.result.files, function (index, file) {
            if (file.url) {
                var link = $('<a>')
                    .attr('target', '_blank')
                    .prop('href', file.url);
                $(data.context.children()[index])
                    .wrap(link);
            } else if (file.error) {
                var error = $('<span class="text-danger"/>').text(file.error);
                $(data.context.children()[index])
                    .append('<br>')
                    .append(error);
            }
        });
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index) {
            var error = $('<span class="text-danger"/>').text('File upload failed.');
            $(data.context.children()[index])
                .append('<br>')
                .append(error);
        });
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});
</script>
