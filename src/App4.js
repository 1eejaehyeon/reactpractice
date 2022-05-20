import React, { useState, useEffect, sueCallback} from 'react';



// 클래스 컴포넌트 쓰기
class App1 extends React.Component {
    state = {
        value1: 0,
        value2: 0,

    };

    componentDidMount() {
        console.log('mount, logic#1');

        console.log('mount, logic#2');

        console.log('mount, logic#3');
    }

    onClick = () => {
        this.setState(
            { value1 : 10}
        )
    }


    render() {
        const { value1 } = this.state;
        return (
          <div>
            Hello App1
            <hr />
            {value1}
            <button onClick={this.onClick}>클릭하세요</button>
          </div>
        );
      }
}

//  함수형 컴포넌트 쓰기

function PostDetail({ postId}) {
    const [post, setPost] = useState();

    useEffect(() => {
        setPost({ title: '포스팅 제목', content: '포스팅 내용 ...': ${postId}});

        return () => {

        };
    }, [postId]);

    return(
        <div>
            <h1> post #{ postId}</h1>

        </div>
    )
}



function App2() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({ value1: 0, value2: 0});
    const [postId, setPostId] = useState(1);


    useEffect(() => {
        console.log("mount, logic#1");
    }, []);  //mount 시에만 호출


    useEffect(() => {
        console.log("changed value:", value);
    }, [value]);  //mount 시에만 호출



    return (
        <div>
            Hello App2
            <hr />
            {JSON.stringify(value)}
            <button onClick = { onClick}> click</button>
            <hr></hr>

            <button onClick={ () => setPostId(100)}> 100번 글보기</button>
            <PostDetail postId={postId} />
        </div>
    );
}   