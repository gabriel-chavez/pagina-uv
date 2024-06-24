import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkBreaks from 'remark-breaks';

const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            children={content}
            rehypePlugins={[rehypeSanitize]}
            remarkPlugins={[remarkBreaks]}
        />
    );
};

export default MarkdownRenderer;
