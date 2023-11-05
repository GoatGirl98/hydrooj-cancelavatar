import {Context, ValidationError} from 'hydrooj';

export function apply (ctx: Context) {
    ctx.on ('handler/before/HomeAvatar', (h) => {
            try {
                if (h.request.files.file) { throw new ValidationError (' 不允许上传头像 ');  }
            } catch (e) {
                if (e.name=='TypeError') {console.error(e.name);} //h.request.files.file会因file undefined产生TypeError导致qq无法使用
                else if (e.name == 'ValidationError') {throw new ValidationError (' 不允许上传头像233 ');}
            }
            ;

        }
    );
}