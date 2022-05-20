import React from "react";
import { List, Typography, Divider } from 'antd';

class Todolist extends React.Component {
    state = {
        todolist: ['파이썬 익히기', '장고 익히기'],
        current: ''
    };

    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            const {todolist, current} = this.state;
            this.setState({
                todolist: [...todolist,current],
                current : ''
            })
        }
    }
    onChangeCurrentt = (event) => {
        const current = event.target.value;
        this.setStage(
            {current: current}
        );
    }

    render() {
        const { todolist, current} = this.state;
        return (
            <div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                />
             <ul>
                {todolist.map((todo, idx) => <li key={idx}>{todo}</li>)}
             </ul>
             <input
                type="text"
                placeholder="할일을 입력해주세요."
                value={current}
                onChange={this.onChangeCurrent}
                onKeyDown={this.onKeyDown} />
            </div>
        )
    };
}


export default Todolist;