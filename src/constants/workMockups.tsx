
const mockupStyle: React.CSSProperties = {
  flexShrink: 0,
  width: 442,
  height: 250,
  borderRadius: 24,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)',
}

function mockup(src: string) {
  return (
    <div key={src} style={mockupStyle}>
      <img
        src={`https://framerusercontent.com/images/${src}`}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        loading="lazy"
      />
    </div>
  )
}

const row1 = [
  '0DzYDI0BJ4hmv3ZFOEoKCHNRads.png?scale-down-to=512&width=3424&height=1982',
  'UR1d2u9WH5HccJP03bKTSY1FDQ.png?scale-down-to=512&width=3426&height=1984',
  'IHfks8oJ30AQUhgh03QgUwHIA.png?scale-down-to=512&width=3422&height=1914',
  'M2aqRkcDBti4UtcNvjmYLwZUOfo.png?scale-down-to=512&width=3416&height=1910',
]

const row2 = [
  'jyNE2GeNnp9aMJcnE6tpf72YE.png?scale-down-to=512&width=5032&height=2634',
  '3HdSKdJID82cm18YIfU2F5to.jpg?scale-down-to=512&width=840&height=500',
  'aCNiceGIrEoe5X35haWm4Ar1uo.jpg?scale-down-to=512&width=884&height=500',
  'v6Mszk3RrZhyQSqyf901fkxHDRg.jpg?scale-down-to=512&width=884&height=500',
]

const row3 = [
  'crpV6RKC6FWLT71lCtgSSST0.png?scale-down-to=512&width=2000&height=1500',
  'JpaqrzL88okqjP21h9uM2ruGJ4A.png?scale-down-to=512&width=800&height=600',
  'XyWulADII4hpinSHIR6UhpNubbo.jpg?scale-down-to=512&width=5040&height=2632',
  'k2CV27IWDWGxHRdsQZnVNllkPW0.png?scale-down-to=512&width=5040&height=2634',
]

export const WORK_MOCKUPS_1 = row1.map(mockup)
export const WORK_MOCKUPS_2 = row2.map(mockup)
export const WORK_MOCKUPS_3 = row3.map(mockup)
