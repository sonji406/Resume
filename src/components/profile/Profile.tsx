import Image from 'next/image';

function Profile() {
  return (
    <aside className='bg-white w-80 h-96 grid grid-cols-2'>
      <Image
        className='w-32'
        src='/image/profile.png'
        width={130}
        height={0}
        alt='Profile Image'
        priority={true}
      ></Image>
      <ul className='bg-yellow-100'>
        <li>이름</li>
        <li>전화번호</li>
        <li>이메일</li>
        <li>github</li>
      </ul>
    </aside>
  );
}

export default Profile;
