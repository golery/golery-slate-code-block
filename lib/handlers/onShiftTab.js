// @flow
import { type Editor } from 'slate-react';
import { getCurrentIndent } from '../utils';
import { dedentLines } from '../changes';
import type Options from '../options';

/**
 * User pressed Shift+Tab in an editor:
 * Reduce indentation in the selected lines.
 */
function onShiftTab(
    opts: Options,
    event: *,
    editor: Editor,
    next: *
): void | Editor {
    const { value } = editor;
    event.preventDefault();
    event.stopPropagation();

    const indent = getCurrentIndent(opts, value);

    // We dedent all selected lines
    return dedentLines(opts, editor, indent);
}

export default onShiftTab;
