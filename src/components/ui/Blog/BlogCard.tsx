/* eslint-disable @next/next/no-img-element */
import { IBlog } from '@/app/blog/page';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';

const BlogCard = ({blog}:{blog:IBlog}) => {
    return (
        <Link className="group w-[350px] flex flex-col h-[650px] border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href={`/blog/${blog.id}`}>
            <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={blog?.blogImage} alt="Image Description" />
            </div>
            <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                    {blog.blogTitle}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-gray-400">
                    {
                        parse(`${blog.blogContent.slice(0, 100)}`)
                        
                    }...
                </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
                <div>
                    <h5 className="text-sm text-gray-800 dark:text-gray-200">{blog?.addedBy}</h5>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;