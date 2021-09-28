function listener(event) {
    console.log(`event passing through ${event.currentTarget.nodeName}`)
}
theButton.addEventListener('click', listener)
theDiv.addEventListener('click', listener)

