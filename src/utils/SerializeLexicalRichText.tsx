import escapeHTML from 'escape-html';
import React, { FC, Fragment } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';


export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;
export const IS_HIGHLIGHT = 1 << 7;

type Node = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: Node[];
  url?: string
  [key: string]: unknown
  newTab?: boolean;
  format: any;
  text?: string;
  tag: any;
  fields?: any;
}

function generateTextAlign(node:Node) {
  if (node.format === 'right') return 'text-right'
  if (node.format === 'center') return 'text-center'
  else return ''
}

type SerializeLexicalRichTextProps = {
  children?: Node[];
  customClassNames?: string[];
  parentNode?: any
}



const SerializeLexicalRichText : FC<SerializeLexicalRichTextProps> = ({ children, customClassNames, parentNode = {} }) => {  
  return (children?.map((node:Node, i:number) => {
    const classNames : { [key: string]: string }= {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      p: '',
      ul: '',
      ol: '',
      li: '',
      blockquote: '',
      a: '',
    };

    if (node.type === 'text') {
      let text = node.text ? <span className=''>{node.text}</span> : <span className='opacity-0'>&nbsp;</span>;

      if (node.format & IS_BOLD) {
        text = (
          <strong key={i}>
            {text}
          </strong>
        );
      }

      if (node.format & IS_CODE) {
        text = (
          <code key={i}>
            {text}
          </code>
        );
      }

      if (node.format & IS_ITALIC) {
        text = (
          <em key={i}>
            {text}
          </em>
        );
      }

      if (node.format & IS_UNDERLINE) {
        text = (
          <span
            className='underline'
            key={i}
          >
            {text}
          </span>
        );
      }

      if (node.format & IS_STRIKETHROUGH) {
        text = (
          <span
            className='line-through'
            key={i}
          >
            {text}
          </span>
        );
      }

      return (
        <Fragment key={i}>
          {text}
        </Fragment>
      );
    }

    if (!node) {
      return null;
    }

    if (node.type === 'heading') {
      return (
        <node.tag className={`${classNames[node.tag]} ${generateTextAlign(node)}`} key={i}>
          {SerializeLexicalRichText({ children: node.children })}
        </node.tag>
      );
    }

    if (node.type === 'list') {
      if (node.listType === 'bullet') {
        return (
          <ul className={`${classNames.ul}`} key={i}>
            {SerializeLexicalRichText({ children: node.children, parentNode: node })}
          </ul>
        );
      } else if (node.listType === 'check') {
        return (
          <ul className={`${classNames.ul} list-none`} key={i}>
            {SerializeLexicalRichText({ children: node.children, parentNode: node })}
          </ul>
        );
      } else if (node.listType === 'number') {
        return (
          <ol className={`${classNames.ol}`} key={i}>
            {SerializeLexicalRichText({ children: node.children, parentNode: node })}
          </ol>
        )
      }
    }

    if (node.type === 'listitem' && node.checked) {
      return (
        <li className={`${classNames.li} flex gap-1`} key={i}>
          <div>
            <MdCheckBox className='w-4 h-4 text-green-500' />
          </div>
          <div className='line-through'>
            {SerializeLexicalRichText({ children: node.children })}
          </div>
        </li>
      );
    } else if (node.type === 'listitem' && parentNode.listType === 'check') {
      return (
        <li className={`${classNames.li} flex gap-1`} key={i}>
          <div>
            <MdCheckBoxOutlineBlank className='w-4 h-4 text-green-500' />
          </div>
          <div className=''>
            {SerializeLexicalRichText({ children: node.children })}
          </div>
        </li>
      );
    } else if (node.type === 'listitem') {
      return (
        <li className={`${classNames.li}`} key={i}>
          {SerializeLexicalRichText({ children: node.children })}
        </li>
      );
    }

    switch (node.type) {

      case 'quote':
        return (
          <blockquote className={`${classNames.blockquote}`} key={i}>
            {SerializeLexicalRichText({ children: node.children })}
          </blockquote>
        );

      case 'link':
        return (
          <a className={`${classNames.a}`}
            href={escapeHTML(node.fields?.linkType === 'custom' ? node?.fields?.url : '')}
            target={node.fields?.newTab ? '_blank' : '_self'}
            key={i}
          >
            {SerializeLexicalRichText({ children: node.children })}
          </a>
        );


      default:
        return (
          <p className={`${classNames.p} ${generateTextAlign(node)}`} key={i}>
            {SerializeLexicalRichText({ children: node.children })}
          </p>
        );
    }
  }).filter((node) => node !== null)
  );
}

export default SerializeLexicalRichText;