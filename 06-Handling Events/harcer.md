---
noteId: "d78c9ae0fd1811ea8fd2dd00380acf36"
tags: []

---

# 1

//What will show these exmaples
class App extends React.Component {
	render() {
		return <div>
			текст
		</div>;
	}
}

class App extends React.Component {
	render() {
		return 
        <div>
			текст
		</div>;
	}
}

class App extends React.Component {
	render() {
		
		
		return (
			<div>
				текст
			</div>
		);
	}
}



# 2


class App extends React.Component {
	render() {
		
		//Такое выдаст ошибку ?
		return (
			<p>текст 1</p>
			<p>текст 2</p>
		);
	}
}

class App extends React.Component {
	render() {
		
		//Это будет работать ?
		return (
			<div>
				<p>текст 1</p>
				<p>текст 2</p>
			</div>
		);
	}
}



# 3 we can write in render variables

class App extends React.Component {
	
	render() {
		return (
			const name = "John";
			const text = <div>текст</div>;
		)
    }
}


class App extends React.Component {
	state = {
		xxx: "Hello world"
	}
	foo = (t) => {
		****
		****
		****
		const elem = <div>{t}</div>;
	}

	render() {
		const text = this.state.xxx;
		
		return (
			foo(text)
		)
    }
}






class App extends React.Component {
	render() {
		const str = 'текст';

		return (
			<div>
				{str}
			</div>
		);
	}
}



# 4 correct this code or not

//correct this example or not

`${}` === {}
const cssStyles = { color: 'red', fontSize: '30px' };css -y reactum grvum e obyekti tesqov

class App extends React.Component {
	render() {
		const text = <div style={ {color: 'red', fontSize: '30px'} }>
			текст
			{ete jsx-um dnum dzevavor pakagic da nshanakum e vor menq uzum enq javascript grel}
		</div>;
		return text;
	}
}
//correct this example or not
class App extends React.Component {
	render() {
		const text = <div style={ {color: "red", fontSize: '30px'} }>
			текст
		</div>;
		return text;
	}
}


class App extends React.Component {
	render() {
		const value = this.state.x ? 'red' : "blue";
		const text = <div style={ {color: value} }>
			текст
		</div>;
		return text;
	}
}



class App extends React.Component {

	render() {
		const text;
		const showText = true;
		
		if (showText) {
			text = <div>текст1</div>;
		} else {
			text = <div>текст2</div>;
		}

		return text;
	}
}






# 11.10.2020

* preventDefault

* current theme - how pass argument to event handler

