const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
'.problem-card, .feature-card, .metric-card'
).forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});