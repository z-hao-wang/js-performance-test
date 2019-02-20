module.exports = {
  comparePerf: (funcA, funB, descA, descB) => {
    const t1 = new Date().getTime();
    funcA();
    const t2 = new Date().getTime();
    console.log(`========${descA} time spend ${t2 - t1}ms`);
    funB();
    const t3 = new Date().getTime();
    console.log(`========${descB} time spend ${t3 - t2}ms`);
    if (t3 - t2 < t2 - t1) {
      console.log(`========${descB} is ${Math.round((t2 - t1) / (t3 - t2))} times faster`);
    } else {
      console.log(`========${descA} is ${Math.round((t3 - t2) / (t2 - t1))} times faster`);
    }
  }
};
