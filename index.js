

function portable_transform_wrap(file, props) {

    // Change file extension.
    if(props.ext) {
        var path = require('path');
        var ext = path.extname(file.filepath);
        file.filepath = file.filepath.substr(0, file.filepath.length - ext.length) + '.' + props.ext;
    }

    // Wrap file contents into a `.js` function.
    file.raw = props.func + '(' + JSON.stringify(file.raw) + ')'
}

module.exports = portable_transform_wrap;
