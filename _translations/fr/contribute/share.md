---
layout: page
ref: share_projects
title: Share Projects
tagline: "Help Pencil2D development by sharing your projects with us."
---
{% include translated_pages %}

<style>
.container {
  border: 1px solid #ccc;
  padding: 2em 0.5em 2em 0.5em;
}

#optional {
  margin-bottom: 1em;
}

#submit {
  display: none;
}

.remove-btn {
  float: right;
  display: inline-block;
}

.btn, .btn:hover {
	background: rgb(20,95,179);
	border-color: rgb(67,128,196);
  padding: 0.5rem 1rem;
}

.success {
  color: #5cb85c;
}

.fail {
  color: #FF0000;
}

input[type=text], textarea {
	display: inline-block;
	width: auto;
	height: calc(1.5em + 0.75rem + 2px);
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
}

textarea {
  width: 100%;
  height: 4rem;
}

.progress {
	height: 20px;
	margin-bottom: 20px;
	overflow: hidden;
	background-color: #f5f5f5;
	border-radius: 4px;
	-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
	box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}

.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: @font-size-small;
  line-height: @line-height-computed;
  color: @progress-bar-color;
  text-align: center;
  background-color: @progress-bar-bg;
  .box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));
  .transition(width .6s ease);
}

.progress-bar-success {
	background-color: #5cb85c;
}

.fileinput-button {
	position: relative;
	overflow: hidden;
	display: inline-block;
}

.fileinput-button input {
	position: absolute;
	top: 0;
	right: 0;
	margin: 0;
	opacity: 0;
	-ms-filter: 'alpha(opacity=0)';
	font-size: 200px !important;
	direction: ltr;
	cursor: pointer;
}
</style>

Hello and thank you for your interest in helping to improve Pencil2D! Unfortunately
this service will be down for an extended period of time due to technical difficulties. We do
not know exactly when we will be able to get this working again, but it will likely not be before
August 15th, 2019. In the mean time, you can still share problematic projects with the Pencil2D
development team by using a third-party upload service such as [MEGA](https://mega.nz/),
[Google Drive](https://drive.google.com), or [WeTransfer](https://wetransfer.com/) and sharing the
link privately by [email](mailto:pencil2danimation@gmail.com) or by message on one our <a href="{{ translated_pages | where: "ref", "community" | map: "url" | first | relative_url }}">community
platforms</a>.

### Why do we want your Pencil2D projects?

Some people may wonder why we are looking for other people's project files when we can just create our own. Unfortunately, creating animations takes lots of time and effort which could be used to improve the software. Furthermore, even if we did make our own animations to test Pencil2D with, they may not accurately reflect the types or variety of animations that our users are typically using Pencil2D for. Everything from your hardware, to Pencil2D version, to computer settings can potentially affect your project in ways that our developers can't mimic. To assure that *your projects* on in *your environment* work as well as possible, there is really no substitute for testing new versions and features with *your work*.

You may also wonder what exactly we will do with your project. By default, when your project has been uploaded it will be shared with a trusted set of developers and quality assurance testers who have agreed not to use or share your work for anything other than testing various aspects of Pencil2D. Here are examples of some things we might use your project to:
- Gather statistics on average project length, file sizes, camera resolutions, and other settings to make more informed design decisions.
- Test new version of the program to assure that your projects continue to be usable in future versions of Pencil2D.
- Test a wide assortment of new features. Some of the features that we currently wish to run tests on could result in lower file sizes, higher export quality, and lower resource consumption for your animations.

If you opt-in to licensing your work publically, we may also use your project for things such as:
- Videos showcasing examples of animation that can be created with Pencil2D, similar to [our first user showcase](https://www.youtube.com/watch?v=aa9PCu_UZpg).
- Video tutorials demonstrating how to use features in Pencil2D.
- Screenshots for our official user manuals.
All public uses of your project will be accompanied with proper attribution to you.

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
activeData = null;
allData = [];
$(function () {
    'use strict';
    // Change this to the location of your server-side upload handler:
    var url = 'https://squarechair.net/p2dupload/jQuery-File-Upload/server/php/';
    $('#submit').on('click', function() {
      var $this = $(this);
      if(activeData) {
        activeData.abort();
        $this.text('Upload');
      }
      else {
        $this.text('Cancel');
        activeData = allData[0];
        if(activeData) {
          activeData.submit();
        }
      }
    });
    var removeButton = $('<span>X</span>')
      .addClass('remove-btn')
      .on('click', function () {
        $(this).parent().parent().remove();
        /*var $this = $(this),
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
        });*/
      });
        /*uploadButton = $('<button/>')
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
            });*/
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(pclx|zip)$/i,
        maxFileSize: 2000000000,
        maxChunkSize: 50000000,
        disableImageResize: true
    }).on('fileuploadsubmit', function (e, data) {
      var input = $('#input');
      data.formData = { 'creator': $('#creator').val(), 'public': $('#public').is(':checked'), 'comments': $('#comments').val() };
    }).on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').appendTo('#files');
        $.each(data.files, function (index, file) {
          allData.push(data);
          var node = $('<p/>').append($('<span/>').text(file.name));
          if (!index) {
            node.append(removeButton.clone(true).data(data));
          }
          node.appendTo(data.context);
        });
        $('#submit').show();
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
                .append($('<div class="fail"/>').text(file.error));
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
                $(data.context.children()[index]).addClass("success");
            } else if (file.error) {
                var error = $('<div/>').text(file.error);
                $(data.context.children()[index]).addClass("fail")
                    .append(error);
            }
        });
        allData.shift();
        activeData = allData[0];
        if(activeData) {
          activeData.submit();
        }
        else {
          $("#submit").hide().text('Submit');
        }
    }).on('fileuploadfail', function (e, data) {
        $.each(data.files, function (index) {
            var error = $('<div/>').text('File upload failed.');
            $(data.context.children()[index]).addClass("fail")
                .append(error);
        });
        allData.shift();
        activeData = null;
        $("#submit").hide().text('Submit');
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
});
</script>
