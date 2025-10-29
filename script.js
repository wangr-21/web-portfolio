document.addEventListener('DOMContentLoaded', function() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.card');
    
    // 为每个卡片添加点击事件监听器
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // 获取卡片中存储的链接地址
            const link = this.getAttribute('data-link');
            
            // 跳转到对应的网页应用
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});