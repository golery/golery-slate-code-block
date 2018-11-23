// @flow
import { type Editor } from 'slate-react';

import type Options from '../options';
import { getCurrentCode } from '../utils';

import unwrapCodeBlockByKey from './unwrapCodeBlockByKey';

/**
 * Convert a code block to a normal block.
 */
function unwrapCodeBlock(opts: Options, editor: Editor, type: string): Editor {
    const { value } = editor;

    const codeBlock = getCurrentCode(opts, value);

    if (!codeBlock) {
        return editor;
    }

    // Convert to paragraph
    unwrapCodeBlockByKey(opts, editor, codeBlock.key, type);

    return editor;
}

export default unwrapCodeBlock;
