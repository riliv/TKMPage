export default {
    props: ["openIndexes"],
    data: () => ({
        openIndexesData: [0]
    }),
    watch: {
        openIndexes: {
        immediate: true,
        handler(val) {
            if (this.openIndexes !== undefined) this.openIndexesData = val;
        }
        }
    },
    methods: {
        handleItemClick(index) {
        const closing = this.openIndexesData.includes(index);
        this.openIndexesData = closing
            ? this.openIndexesData.filter(i => i !== index)
            : [...this.openIndexesData, index];
        this.$emit("open-indexes", this.openIndexesData);
        }
    },
    render() {
        if (!this.$scopedSlots.default) return null;
        return this.$scopedSlots.default({
        openIndexes: this.openIndexesData,
        handleItemClick: this.handleItemClick
        });
    }
};
  