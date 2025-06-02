<>
<hr />

<div className="flex mt-12 mb-6">
  <h3>Star</h3>
</div>
<div className="flex gap-4">
  <Star />
</div>

<hr />

<div className="flex mt-12 mb-6">
  <h3>Menu</h3>
</div>

<div className="flex gap-4">
  <Menu>
    <Menu.Button>Menu Button</Menu.Button>
    <Menu.Dropdown>
      <Menu.Item>Menu Item 1</Menu.Item>
    </Menu.Dropdown>
  </Menu>
</div>

<hr />

<div className="flex mt-12 mb-6">
  <h3>Badge</h3>
</div>

<div className='flex gap-4'>
  <Badge shape="pill" color="grey">A Badge</Badge>
  <Badge shape="pill" color="red">A Badge</Badge>
  <Badge shape="pill" color="yellow">A Badge</Badge>
  <Badge shape="pill" color="green">A Badge</Badge>
  <Badge shape="pill" color="blue">A Badge</Badge>
  <Badge shape="pill" color="indigo">A Badge</Badge>
  <Badge shape="pill" color="purple">A Badge</Badge>
  <Badge shape="pill" color="pink">A Badge</Badge>
  <br />
  <br />
  <br />
  <Badge shape="square" color="grey">A Badge</Badge>
  <Badge shape="square" color="red">A Badge</Badge>
  <Badge shape="square" color="yellow">A Badge</Badge>
  <Badge shape="square" color="green">A Badge</Badge>
  <Badge shape="square" color="blue">A Badge</Badge>
  <Badge shape="square" color="indigo">A Badge</Badge>
  <Badge shape="square" color="purple">A Badge</Badge>
  <Badge shape="square" color="pink">A Badge</Badge>
</div>

<hr />

<div className="flex mt-12 mb-6">
  <h3>Banners</h3>
</div>

<div className="flex gap-4">

  <Banner title="so we're doing titles huh?" variant="default">
    hey there mother fluffer!
  </Banner>
  <Banner variant="success">
    success betch!
  </Banner>
  <Banner title="so the title is optional" variant="warning">
    now this is just a warning
  </Banner>
  <Banner title="in fact, I just might kinda like it" variant="error">
    full on DANGER WILL ROBINSON
  </Banner>
</div>

<hr />

<div className="flex mt-12 mb-6">
  <h3>Card</h3>
</div>

<div className='flex gap-4'>

  <Card title="Card Title" showIcon>
    <p>Card content goes here.</p>
    <Button size="lg" variant="success">A Button</Button>
  </Card>
</div>
</>