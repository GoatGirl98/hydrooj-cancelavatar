import {Context, ValidationError} from 'hydrooj';

export function apply (ctx: Context) {
    ctx.on ('handler/before/HomeAvatar', (h) => {
            if (h.request.files?.file) throw new ValidationError (' 不允许上传头像 ');
        }
    );
}
