const markAsRead = document.getElementById('mark-all')
const notificationNumber = document.querySelector('.not-num')
const iconEl = document.querySelectorAll('.fa-solid')
const recentPost = document.querySelectorAll('.recent-post')

markAsRead.addEventListener('click', () => {
  if (markAsRead.textContent === 'Mark all as read') {
    notificationNumber.textContent = '0'
    markAsRead.innerText = 'Mark all unread'
    markAllAsRead()
    removeRedDot()
  } else if (markAsRead.textContent === 'Mark all unread') {
    notificationNumber.textContent = '3'
    markAsRead.innerText = 'Mark all as read'
    markAllUnread()
    getRedDot()
  }
})

function markAllAsRead() {
  recentPost.forEach((post) => {
    post.classList.add('read-post')
  })
}

function removeRedDot() {
  iconEl.forEach((dot) => {
    dot.style.display = 'none'
  })
}

function markAllUnread() {
  recentPost.forEach((post) => {
    post.classList.remove('read-post')
  })
}

function getRedDot() {
  iconEl.forEach((dot) => {
    dot.style.display = 'inline-block'
  })
}