class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string   :name
      t.string   :content

      t.integer  :blog_id
      t.timestamps null: false
    end
  end
end
