flux- architecture builyin

redux- centerally stored architecture third party

1 component lifecyle
===================


component Mounting
constructor
getderivedstatefromprops()
render()
componentDidMount()

2 component update

getderivedstatefromprops()
shouldcomponentupdate
render()
getsnapshotBeforeUpate(prevprops,prevState)
componentDidupdate(prevprops,prevState)


3 component umounting
componentwillunmount()