//log animation
var width = window.innerWidth;
var height = 230;

var camera = new THREE.PerspectiveCamera(
75, width/height, 1, 1000);
camera.position.set(7.5, 2, 8);

var scene = new THREE.Scene();

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#222239");
renderer.setSize(width, height);

document.body.appendChild(
       renderer.domElement);

var light = new THREE.DirectionalLight(
  0xffffff);
light.position.set(-10, -10, 0);
scene.add(light);

var light = new THREE.DirectionalLight(
  0xffffff);
light.position.set(10, 20, 40);
scene.add(light);

var geo = new THREE.BoxGeometry(1, 1, 1);

var mat = new THREE.MeshPhongMaterial(
{color: 0x444459});

objs = [];
// for loop to generate random cubes and
// position then randomly
for(let x = 0; x < 20;  x++) {
  obj = new THREE.Mesh(geo, mat);
  obj.position.set(
   Math.floor(Math.random()*15), 
   Math.floor(Math.random()*12),
   Math.floor(Math.random()*7),
  );
  scene.add(obj);
  objs.push(obj);
};

function animate() {
  requestAnimationFrame(animate);
  for(obj of objs) {
    //obj.rotation.z -= -.007;
    //obj.rotation.y -= .01;
    //obj.rotation.x += .02
  };
  renderer.render(scene, camera);
};
//renderer.render(scene, camera);

animate();

window.addEventListener('resize', () => 
{
  width = window.innerWidth;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.render(scene, camera);
  console.log(width);
});

console.log(width);

