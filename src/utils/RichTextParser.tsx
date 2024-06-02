import SerializeLexicalRichText from '@/utils/SerializeLexicalRichText';
import React, { FC } from 'react';


type RichTextParserProps = {
    className?: string;
    content?: any;
    customClassNames?: any;
}

const RichTextParser : FC<RichTextParserProps> = ({ className, content, customClassNames }) => {
    if (!content?.root?.children) return ''

    return (
        <div className={`${[className].filter(Boolean).join(' ')} richText`}>
            {SerializeLexicalRichText({ children: content.root.children, customClassNames })}
        </div>
    );
};

export default RichTextParser;