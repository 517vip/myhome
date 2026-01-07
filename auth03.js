
// 权限验证系统
// 将您的付费用户ID列表放在这里
// 实际使用时，建议将此列表放在服务器端验证

// 示例：付费用户ID列表（实际应该从服务器获取）
const PAID_USERS = [
    'Free',
    'zywwj',
    'hzc',
    'wcd',
    // 添加更多用户ID...
];

// 从URL获取用户ID
function getUserIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('user_id');
}

// 验证用户权限
function checkAccess() {
    return new Promise((resolve) => {
        const userId = getUserIdFromURL();
        
        if (!userId) {
            // 没有提供用户ID，显示订阅指引
            updateUIForNoAccess('未提供用户ID');
            resolve(false);
            return;
        }
        
        // 模拟API请求（实际应替换为真实的服务器验证）
        setTimeout(() => {
            const hasAccess = PAID_USERS.includes(userId);
            
            if (hasAccess) {
                updateUIForAccessGranted(userId);
            } else {
                updateUIForNoAccess('用户ID未授权');
            }
            
            resolve(hasAccess);
        }, 500); // 模拟网络延迟
    });
}

// 更新UI - 已授权
function updateUIForAccessGranted(userId) {
    const userInfoEl = document.getElementById('userInfo');
    if (userInfoEl) {
        userInfoEl.innerHTML = `
            <i class="fas fa-check-circle" style="color: #4CAF50; margin-right: 8px;"></i>
            会员 #${userId.substring(0, 8)}...
            <span style="margin-left: 10px; font-size: 0.8rem; opacity: 0.8;">
                <i class="fas fa-unlock"></i> 已解锁
            </span>
        `;
    }
    
    // 解锁所有剧集链接
    unlockEpisodes();
}

// 更新UI - 未授权
function updateUIForNoAccess(reason) {
    const userInfoEl = document.getElementById('userInfo');
    if (userInfoEl) {
        userInfoEl.innerHTML = `
            <i class="fas fa-lock" style="color: #ff6b6b; margin-right: 8px;"></i>
            ${reason}，请先订阅
            <a href="https://afdian.com/a/zywwj" target="_blank" style="margin-left: 10px; color: #4a9eff;">
                <i class="fas fa-external-link-alt"></i> 立即订阅
            </a>

    

        `;
    }
}

// 解锁剧集链接
function unlockEpisodes() {
    document.querySelectorAll('.watch-btn').forEach(btn => {
        btn.classList.remove('locked');
        btn.innerHTML = '<i class="fas fa-play"></i> 立即观看';
    });
}

// 帮助模态框
function showHelp() {
    document.getElementById('helpModal').style.display = 'flex';
}

function hideHelp() {
    document.getElementById('helpModal').style.display = 'none';
}

// 页面加载时运行验证
document.addEventListener('DOMContentLoaded', function() {
    checkAccess();
    
    // 点击模态框背景关闭
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideHelp();
            }
        });
    }

});





