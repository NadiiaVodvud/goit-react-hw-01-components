import user from 'data/user.json';

export const App = () => {
  return (
    <Profile key={user.username} profile={user} />
    //     <div class="profile">
    //   <div class="description">
    //     <img
    //       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    //       alt="User avatar"
    //       class="avatar"
    //     />
    //     <p class="name">Petra Marica</p>
    //     <p class="tag">@pmarica</p>
    //     <p class="location">Salvador, Brasil</p>
    //   </div>

    //   <ul class="stats">
    //     <li>
    //       <span class="label">Followers</span>
    //       <span class="quantity">1000</span>
    //     </li>
    //     <li>
    //       <span class="label">Views</span>
    //       <span class="quantity">2000</span>
    //     </li>
    //     <li>
    //       <span class="label">Likes</span>
    //       <span class="quantity">3000</span>
    //     </li>
    //   </ul>
    // </div>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
