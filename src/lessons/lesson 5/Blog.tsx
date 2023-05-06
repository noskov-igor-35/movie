import React from 'react';
import Post from './Post';

interface PostData {
  id: number
  title: string
  content: string
}

interface Props {
  posts: PostData[]
}

export default function Blog(props: Props): JSX.Element {
  const sidebar = <ul>{ props.posts.map(({ id, title }) => <li key={ id }>{ title }</li>) }</ul>;
  const content = props.posts.map(({ id, title, content }) => <Post key={ id } title={ title } content={ content }/>);
  return <div>{ sidebar }{ content }</div>;
}
